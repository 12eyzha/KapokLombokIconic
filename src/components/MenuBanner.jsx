import Banner2 from "../assets/Banner/banner2.jpg";
function MenuBanner() {
  return (
    <section
      style={{
        height: "400px",
        position: "relative",
      }}
    >
      <img
      src={Banner2}
      alt="Menu Banner"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "rgba(0,0,0,0.45)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: "4rem",
            fontFamily:
              "'Playfair Display', serif",
          }}
        >
          Menu
        </h1>
      </div>
    </section>
  );
}

export default MenuBanner;