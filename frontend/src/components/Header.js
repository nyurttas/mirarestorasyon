import React from "react";
import { ReactComponent as Logo } from "../logo.svg";

function Header() {
  return (
    <header className="bg-light py-5">
      <div className="container text-center">
        <Logo width={80} height={80} />
        <h1 className="display-5 fw-bold mt-3 text-dark">Mirarestorasyon</h1>
        <p className="lead">Tecrübemizle inşaat ve restorasyon projelerinde fark yaratıyoruz.</p>
        <a href="#iletisim" className="btn btn-primary btn-lg mt-2">Bize Ulaşın</a>
      </div>
    </header>
  );
}

export default Header;