import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    fontSize: "16px",
    transition: "0.3s",
    cursor: "pointer",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(166,23,27,0.97)" : "#A6171B",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        boxShadow: scrolled
          ? "0 2px 20px rgba(0,0,0,0.25)"
          : "none",
        transition: "all 0.3s ease",
        height: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 220px 1fr 1fr",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* HOME */}
        <Link
          to="/"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.opacity = 0.7)}
          onMouseLeave={(e) => (e.target.style.opacity = 1)}
        >
          Home
        </Link>

        {/* MENU */}
        <Link
          to="/menu"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.opacity = 0.7)}
          onMouseLeave={(e) => (e.target.style.opacity = 1)}
        >
          Menu
        </Link>

        {/* LOGO */}
        <Link
          to="/"
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20px",
                zIndex: 1001,
              }}
            >
            <img
              src="src/assets/Logo/Logo.jpeg"
              alt="Kapok Lombok Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </Link>

        {/* ABOUT */}
        <a
            href="/about"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.opacity = 0.7)}
            onMouseLeave={(e) => (e.target.style.opacity = 1)}
        >
          About
        </a>

        {/* FEEDBACK */}
        <Link
          to="/feedback"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.opacity = 0.7)}
          onMouseLeave={(e) => (e.target.style.opacity = 1)}
        >
          Feedback
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;