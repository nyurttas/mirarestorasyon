import React from "react";


function About() {
  return (
    <section className="row align-items-center mb-5" data-aos="fade-left">
      <div className="col-md-6">
        <h2>Hakkımızda</h2>
        <p>
          Mirarestorasyon olarak, tarihi ve modern yapıları koruma, güçlendirme ve yenileme konusunda uzmanız. Alanında deneyimli ekibimiz ile profesyonel çözümler sunuyoruz.
        </p>
      </div>
      <div className="col-md-6 text-center" data-aos="fade-left">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Restorasyon" className="img-fluid rounded shadow" style={{maxHeight: '280px'}} />
      </div>
    </section>
  );
}

export default About;