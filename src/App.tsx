import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Layout } from "@/components/Layout";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { ServicePage } from "@/pages/ServicePage";
import { SERVICES } from "@/data/content";

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {SERVICES.map((service) => (
              <Route
                key={service.id}
                path={`/services/${service.id}`}
                element={<ServicePage serviceId={service.id} />}
              />
            ))}
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
