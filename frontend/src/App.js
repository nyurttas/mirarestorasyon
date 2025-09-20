import React, { useEffect} from "react"
import ScrollToTopButton from "./components/ScrollToTopButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <main className="container py-5">
        <About />
      </main>
      <Footer />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <main className="container py-5">
        <Services />
      </main>
      <Footer />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <main className="container py-5">
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
      </Routes>
      <ScrollToTopButton />
    </Router>
  );
}

export default App;