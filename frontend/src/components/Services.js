import React from "react";

function Services() {
  return (
    <section className="mb-5" id="hizmetler" data-aos="fade-left">
      <h2 className="mb-4">Hizmetlerimiz</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary">Restorasyon</h5>
              <p className="card-text">Tarihi yapıları aslına uygun şekilde yeniliyoruz.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary">Yapı Güçlendirme</h5>
              <p className="card-text">Deprem ve diğer etkilere karşı yapıları güvenli hale getiriyoruz.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary">Dekorasyon</h5>
              <p className="card-text">İç ve dış mekanlarda estetik çözümler sunuyoruz.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;