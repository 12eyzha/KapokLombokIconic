function MenuCard({ item }) {
  const whatsappMessage = `Halo Kapok Lombok,

  Saya ingin memesan ${item.name} dengan harga ${item.price}.

  Mohon informasi mengenai ketersediaannya.

  Terima kasih.`;

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        transition: "0.3s",
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
            margin: 0,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {item.name}
        </h3>

        <p
          style={{
            color: "#A6171B",
            fontWeight: 600,
            marginBottom: "0.5rem",
          }}
        >
          {item.price}
        </p>

        <p
          style={{
            marginBottom: "1rem",
          }}
        >
          ⭐ {item.rating}
        </p>

        <a
          href={`https://wa.me/6282131178182?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            width: "100%",
            textAlign: "center",
            background: "#A6171B",
            color: "#fff",
            textDecoration: "none",
            padding: "12px",
            borderRadius: "8px",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            boxSizing: "border-box",
          }}
        >
          Order Now
        </a>
      </div>
    </div>
  );
}

export default MenuCard;