function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        height: "540px",
        overflow: "hidden",
        marginTop: "64px",
      }}
    >
      <img
        src="/src/assets/Banner/Banner1.jpg"
        alt="Rempah-rempah dan bumbu masakan pedas"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          filter: "brightness(0.75)",
        }}

        onError={(e) => {
          e.target.style.display = "none";
          e.target.parentElement.style.background =
            "linear-gradient(135deg, #1a0a00 0%, #3d1500 50%, #2a0a0a 100%)";
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 100%)",
          display: "flex",
          alignItems: "flex-end",
          padding: "0 5% 4rem",
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: "'Oswald', 'Poppins', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.05,
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            }}
          >
            TASTE IS
            <br />
            EVERYTHING
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;