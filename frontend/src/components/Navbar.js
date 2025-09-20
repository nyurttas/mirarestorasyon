import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">Mira Restorasyon</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Menüyü Aç/Kapat"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Anasayfa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                Hakkımızda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">
                Hizmetler
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                İletişim
              </NavLink>
            </li>
          </ul>
          {/* Sosyal ikonlar yanyana ve ortalı */}
          <div className="d-flex justify-content-center align-items-center gap-3 ms-lg-4 mt-2 mt-lg-0">
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light fs-4"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/905xxxxxxxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-success fs-4"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light fs-4"
              title="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;