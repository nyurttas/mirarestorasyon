import React from "react";

function Contact() {
  return (
    <section className="mb-5" id="iletisim" data-aos="fade-left">
      <h2>İletişim</h2>
      <div className="card shadow-sm">
        <div className="card-body">
          <p className="mb-2">Sorularınız için bize ulaşın:</p>
          <ul className="list-unstyled">
            <li><strong>Email:</strong> info@mirarestorasyon.com</li>
            <li><strong>Telefon:</strong> +90 555 555 55 55</li>
            <li><strong>Adres:</strong> İstanbul, Türkiye</li>
          </ul>
          <a href="mailto:info@mirarestorasyon.com" className="btn btn-outline-primary mt-3">Email Gönder</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;