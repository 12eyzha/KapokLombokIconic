import MenuCard from "./MenuCard";

function MenuCategory({ title, items }) {
  return (
    <section
      style={{
        marginBottom: "5rem",
      }}
    >
      {/* Garis Atas */}
      <div
        style={{
          width: "100%",
          height: "2px",
          background: "#E2D6C8",
          marginBottom: "2rem",
        }}
      />

      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontFamily: "'Playfair Display', serif",
          color: "#A6171B",
          marginBottom: "0.75rem",
        }}
      >
        {title}
      </h2>

      <div
        style={{
          width: "80px",
          height: "3px",
          background: "#A6171B",
          margin: "0 auto 2.5rem",
          borderRadius: "999px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "2rem",
        }}
      >
        {items.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
          />
        ))}
      </div>

      {/* Garis Bawah */}
      <div
        style={{
          width: "100%",
          height: "1px",
          background: "#E2D6C8",
          marginTop: "3rem",
        }}
      />
    </section>
  );
}

export default MenuCategory;