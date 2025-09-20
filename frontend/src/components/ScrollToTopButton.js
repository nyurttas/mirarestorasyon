import React, { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="btn btn-primary rounded-circle"
      style={{
        position: "fixed",
        right: "24px",
        bottom: "32px",
        zIndex: "999",
        width: "48px",
        height: "48px",
        fontSize: "1.5rem",
        display: visible ? "block" : "none",
        boxShadow: "0 4px 12px rgba(58,78,122,.18)"
      }}
      aria-label="Yukarı Çık"
      title="Yukarı Çık"
    >
      <span style={{ fontWeight: "bold" }}>&uarr;</span>
    </button>
  );
}

export default ScrollToTopButton;