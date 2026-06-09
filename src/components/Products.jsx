import menuData from "../data/Products";

function Products() {
  const featuredProducts = menuData.menuUtama;

  return (
    <section
      id="menu"
      style={{
        background: "#FBF5F0",
        padding: "4rem 5% 5rem",
      }}
    >
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "2.5rem",
          fontWeight: 700,
          color: "#1a1a1a",
          textAlign: "center",
          margin: "0 0 3rem",
        }}
      >
        Menu Favorit
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1000px",
          margin: "0 auto 2rem",
        }}
      >
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 12px 25px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(0,0,0,0.08)";
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "1rem" }}>
              <h3
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#1a1a1a",
                  marginBottom: "0.5rem",
                }}
              >
                {item.name}
              </h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    color: "#A6171B",
                    fontWeight: "700",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {item.price}
                </span>

                <span
                  style={{
                    background: "#fff7d6",
                    padding: "4px 8px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  ⭐ {item.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        <a
          href="/menu"
          style={{
            display: "inline-block",
            background: "#A6171B",
            color: "#fff",
            padding: "12px 28px",
            borderRadius: "999px",
            textDecoration: "none",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "600",
            transition: "0.3s",
          }}
        >
          Lihat Semua Menu
        </a>
      </div>
    </section>
  );
}

export default Products;