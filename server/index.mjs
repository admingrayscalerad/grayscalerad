import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

// Ensure emails directory exists
const emailsDir = path.join(__dirname, '..', 'emails');
if (!fs.existsSync(emailsDir)) {
  fs.mkdirSync(emailsDir, { recursive: true });
}

app.use(cors());
app.use(express.json());

// WPOven Free SMTP Server for Testing
// https://www.wpoven.com/tools/free-smtp-server-for-testing
const transporter = nodemailer.createTransport({
  host: 'smtp.freesmtpservers.com',
  port: 25,
  secure: false,
  tls: {
    rejectUnauthorized: false,
  },
});

app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ success: false, error: 'Name and email are required' });
  }

  const timestamp = new Date().toISOString();
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: 'test@freesmtpservers.com',
    subject: `New Contact Form Submission from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Message:
${message || 'No message provided'}
    `.trim(),
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message ? message.replace(/\n/g, '<br>') : 'No message provided'}</p>
    `,
  };

  // Save locally first as a fallback
  const emailRecord = {
    id: `local-${Date.now()}`,
    timestamp,
    name,
    email,
    phone: phone || 'N/A',
    message: message || 'No message provided',
    smtpStatus: 'pending',
    messageId: null,
    error: null,
  };

  const recordPath = path.join(emailsDir, `${emailRecord.id}.json`);
  fs.writeFileSync(recordPath, JSON.stringify(emailRecord, null, 2));

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent via SMTP:', info.messageId);

    // Update local record on success
    emailRecord.smtpStatus = 'sent';
    emailRecord.messageId = info.messageId;
    fs.writeFileSync(recordPath, JSON.stringify(emailRecord, null, 2));

    res.json({ success: true, messageId: info.messageId, localId: emailRecord.id });
  } catch (error) {
    console.error('❌ SMTP Error:', error.message);

    // Update local record on failure
    emailRecord.smtpStatus = 'failed';
    emailRecord.error = error.message;
    fs.writeFileSync(recordPath, JSON.stringify(emailRecord, null, 2));

    // Still return success to frontend since we saved locally, but warn
    res.json({
      success: true,
      warning: 'SMTP failed, but message was saved locally.',
      smtpError: error.message,
      localId: emailRecord.id,
    });
  }
});

app.get('/api/emails', (req, res) => {
  try {
    const files = fs.readdirSync(emailsDir).filter(f => f.endsWith('.json'));
    const emails = files
      .map(f => JSON.parse(fs.readFileSync(path.join(emailsDir, f), 'utf8')))
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    res.json({ success: true, count: emails.length, emails });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', smtp: 'smtp.freesmtpservers.com:25' });
});

app.listen(PORT, () => {
  console.log(`✅ SMTP server running on http://localhost:${PORT}`);
  console.log(`📧 SMTP configured for: smtp.freesmtpservers.com:25 (WPOven Free SMTP)`);
  console.log(`💾 Local email backups saved to: ${emailsDir}`);
  console.log(`🔍 View sent emails: http://localhost:${PORT}/api/emails`);
});
