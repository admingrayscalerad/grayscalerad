# Grayscale Radiology

> **Official Website of Grayscale Radiology — India's Trusted Tele-Radiology & Clinical Imaging Support Provider**

[![React](https://img.shields.io/badge/React-19.2.6-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.4-EF0090?logo=framer)](https://www.framer.com/motion)
[![Three.js](https://img.shields.io/badge/Three.js-r160-000000?logo=threedotjs)](https://threejs.org)

---

## Short Description

**Grayscale Radiology** is a modern, multi-page React website for a tele-radiology healthcare service provider, featuring dark/light themes, 3D particle backgrounds, animated UI components, WhatsApp integration, and a functional contact form with SMTP backend.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Pages](#pages)
- [Services](#services)
- [Installation](#installation)
- [Development](#development)
- [Build](#build)
- [Deployment](#deployment)
- [Contact](#contact)
- [License](#license)

---

## About the Project

**Grayscale Radiology** is a professional tele-radiology service provider based in Ahmedabad, India. This website serves as the digital presence for the company, showcasing their services, team, and enabling potential clients to get in touch.

**Legal Entity:** Rg. NPLTS India LLP  
**Location:** B 601 Sky Elegant, Motera Road, Tapovan Circle, Nigam Nagar, Chandkheda, Ahmedabad-382424  
**Tagline:** *"Connecting Today and TOMORROW"*

---

## Features

### Design & UI
- **Dark & Light Theme** — Full theme switching with persistent user preference
- **3D Particle Background** — Animated particle field using Three.js and @react-three/fiber
- **Glassmorphism Cards** — Frosted glass effect with animated gradient borders
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop
- **Smooth Animations** — Scroll-triggered reveals, hover effects, and page transitions via Framer Motion

### Pages
- **Home** — Hero section, stats, services overview, how it works, testimonials, contact form
- **About** — Mission & vision, core values, team members
- **Contact** — Contact methods, detailed contact form with validation
- **7 Service Pages** — Individual detail pages for each radiology service

### Functionality
- **WhatsApp Integration** — Floating WhatsApp button with pre-filled message
- **Contact Form** — Functional form with SMTP email backend (Nodemailer + Express)
- **Theme Toggle** — Sun/Moon toggle in navbar with localStorage persistence
- **Mobile Navigation** — Hamburger menu with slide-out panel

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI library |
| **TypeScript** | Type safety |
| **Vite 5** | Build tool & dev server |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Animations & transitions |
| **Three.js / React Three Fiber** | 3D particle background |
| **React Router DOM v7** | Client-side routing |
| **Lucide React** | Icon library |
| **Express.js** | SMTP backend server |
| **Nodemailer** | Email sending |

---

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | **Home** | Landing page with all sections |
| `/about` | **About Us** | Company mission, values, and team |
| `/contact` | **Contact** | Contact info and inquiry form |
| `/services/1` | **Radiology Consultation** | Expert consultation service |
| `/services/2` | **Reliable Reporting** | Standardized peer-reviewed reports |
| `/services/3` | **Multi-Modality Reporting** | All imaging modalities |
| `/services/4` | **Round-the-Clock Coverage** | 24/7/365 availability |
| `/services/5` | **Emergency Reporting** | Rapid STAT turnaround |
| `/services/6` | **Deep Image Analysis** | AI-assisted diagnostics |
| `/services/7` | **Second Opinion Support** | Independent expert reviews |

---

## Services

1. **Radiology Consultation** — Expert consultations for complex cases
2. **Reliable Reporting** — Standardized, peer-reviewed radiology reports
3. **Multi-Modality Reporting** — X-ray, CT, MRI, Ultrasound, PET, and more
4. **Round-the-Clock Coverage** — 24/7/365 radiologist availability
5. **Emergency Reporting** — Rapid STAT turnaround with critical alerts
6. **Deep Image Analysis** — AI-assisted image analysis with expert oversight
7. **Second Opinion Support** — Independent expert second opinions

---

## Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Clone & Install

```bash
# Clone the repository
git clone https://github.com/yourusername/grayscalerad.git

# Navigate to project directory
cd grayscalerad

# Install dependencies
npm install
```

---

## Development

### Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Start Backend Server (for contact form emails)

```bash
npm run server
```

The SMTP backend will run at `http://localhost:3001`

### Start Both (Frontend + Backend)

```bash
npm run start
```

---

## Build

### Production Build

```bash
npm run build
```

The production files will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## Deployment

This project uses **HashRouter** for client-side routing, making it compatible with static hosting providers like:

- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any static file server

Simply deploy the contents of the `dist/` folder after running `npm run build`.

---

## Project Structure

```
grayscalerad/
├── public/                 # Static assets (logos, favicons)
├── src/
│   ├── assets/            # Images (team photos, service images)
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI primitives
│   │   └── three/        # Three.js components
│   ├── data/             # Static content data
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   ├── App.tsx           # Root component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── server/               # Express SMTP backend
├── dist/                 # Production build output
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.mjs
└── tailwind.config.js
```

---

## Contact

**Grayscale Radiology**  
📍 B 601 Sky Elegant, Motera Road, Tapovan Circle, Nigam Nagar, Chandkheda, Ahmedabad-382424

📞 **Phone:** +91 63523 57576  
📧 **Email:** admin.grayscalerad@gmail.com  
💬 **WhatsApp:** +91 63523 57576

---

## License

This project is proprietary and owned by **Grayscale Radiology**.

---

<p align="center">
  Built with ❤️ for better diagnostics
</p>
