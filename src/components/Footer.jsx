function Footer() {
  return (
    <footer id="contact" style={{ background: "#fff" }}>
      <div
        style={{
          background: "#A6171B",
          padding: "1.5rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: "1.8rem",
            color: "#fff",
            margin: 0,
          }}
        >
          Our Contact
        </h2>
      </div>

      <div
        style={{
          background: "#FBF5F0",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
          padding: "3rem 5%",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            maxWidth: "340px",
          }}
        >
          <div style={{ marginTop: "2px", flexShrink: 0 }}>
            <svg width="28" height="32" viewBox="0 0 24 28" fill="none">
              <path
                d="M12 0C7.03 0 3 4.03 3 9c0 6.75 9 17 9 17s9-10.25 9-17C21 4.03 16.97 0 12 0zm0 12.25c-1.79 0-3.25-1.46-3.25-3.25S10.21 5.75 12 5.75s3.25 1.46 3.25 3.25S13.79 12.25 12 12.25z"
                fill="#1a1a1a"
              />
            </svg>
          </div>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "14.5px",
              lineHeight: 1.7,
              color: "#333",
              margin: 0,
            }}
          >
            Malang Ruko, Jl. Soekarno Hatta Indah
            <br />
            No.C9, Mojolangu, Kec. Lowokwaru, Kota
            <br />
            Malang, Jawa Timur 65142
          </p>
        </div>

        <div
          style={{
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid #ddd",
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            width: "360px",
            height: "220px",
            flexShrink: 0,
          }}
        >
          <iframe
            title="Kapok Lombok Location"
            src="https://maps.google.com/maps?q=Kapok+Lombok+Malang+Jl+Soekarno+Hatta+Indah+C9&output=embed&z=16"
            width="360"
            height="220"
            style={{ border: "none", display: "block" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div
        style={{
          background: "#FBF5F0",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          padding: "0 0 2.5rem",
        }}
      >
        <a
          href="https://wa.me/082131178182"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          aria-label="WhatsApp Kapok Lombok"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#1a1a1a" />
            <path
              d="M20 10C14.477 10 10 14.477 10 20c0 1.89.525 3.66 1.438 5.172L10 30l4.992-1.41A9.96 9.96 0 0020 30c5.523 0 10-4.477 10-10S25.523 10 20 10zm0 18a7.96 7.96 0 01-4.063-1.112l-.29-.172-3.002.849.864-2.936-.19-.302A7.958 7.958 0 0112 20c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8zm4.39-5.953c-.24-.12-1.424-.703-1.645-.784-.22-.08-.38-.12-.54.12-.16.24-.62.784-.76.944-.14.16-.28.18-.52.06-1.4-.7-2.32-1.25-3.24-2.836-.245-.42.245-.39.7-1.3.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.195-.468-.394-.4-.54-.408-.14-.008-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.692 2.585 4.1 3.625.573.247 1.02.394 1.37.504.576.183 1.1.157 1.514.095.462-.068 1.424-.582 1.624-1.144.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"
              fill="white"
            />
          </svg>
        </a>

        <a
          href="https://instagram.com/kapoklombok.iconic"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          aria-label="Instagram Kapok Lombok"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#1a1a1a" />
            <rect
              x="12"
              y="12"
              width="16"
              height="16"
              rx="4.5"
              stroke="white"
              strokeWidth="1.8"
              fill="none"
            />
            <circle
              cx="20"
              cy="20"
              r="3.5"
              stroke="white"
              strokeWidth="1.8"
              fill="none"
            />
            <circle cx="25" cy="15" r="1" fill="white" />
          </svg>
        </a>

        <a
          href="https://g.page/kapok lombok iconic"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          aria-label="Google My Business Kapok Lombok"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#1a1a1a" />
            <path
              d="M20 12c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.08 0 7.437-3.065 7.94-7H20v-2h9.94c.04.32.06.648.06.984V20c0 4.418-3.582 8-8 8-4.418 0-8-3.582-8-8s3.582-8 8-8c2.21 0 4.21.895 5.656 2.344l-1.414 1.414C24.21 13.314 22.21 12.5 20 12.5c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5c3.86 0 7.063-2.93 7.46-6.75H20V18h9.96A8 8 0 0120 12z"
              fill="none"
            />
            <text
              x="20"
              y="25"
              textAnchor="middle"
              fontFamily="Arial"
              fontWeight="700"
              fontSize="15"
              fill="white"
            >
              G
            </text>
          </svg>
        </a>
      </div>

      <div
        style={{
          background: "#A6171B",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "13px",
            color: "rgba(255,255,255,0.85)",
            margin: 0,
          }}
        >
          © 2026 Kapok Lombok Iconic | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;