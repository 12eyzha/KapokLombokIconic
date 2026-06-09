import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FeedbackPage() {
  return (
    <>
      <Navbar />

      <section
        style={{
          minHeight: "100vh",
          background: "#FBF5F0",
          padding: "150px 5% 80px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3.5rem",
              color: "#1A1A1A",
              marginBottom: "1rem",
            }}
          >
            Feedback
          </h1>

          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#666",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Kami sangat menghargai setiap masukan dari pelanggan.
            Sampaikan kritik, saran, maupun pengalaman Anda untuk membantu
            kami memberikan pelayanan terbaik.
          </p>
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "3rem",
          }}
        >
          {/* LEFT CARD */}
          <div
            style={{
              background: "#A6171B",
              borderRadius: "24px",
              padding: "3rem",
              color: "#fff",
              boxShadow: "0 10px 30px rgba(108, 107, 107, 0.1)",
            }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2rem",
                marginBottom: "1.5rem",
              }}
            >
              Contact Information
            </h2>

            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                lineHeight: 1.8,
                opacity: 0.9,
                marginBottom: "3rem",
              }}
            >
              Hubungi kami melalui informasi berikut atau kirimkan pesan
              langsung melalui formulir yang tersedia.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <div>
                <strong>Phone</strong>
                <p style={{ marginTop: "8px" }}>
                  +62 812-3456-7890
                </p>
              </div>

              <div>
                <strong>Email</strong>
                <p style={{ marginTop: "8px" }}>
                  kapoklombok@gmail.com
                </p>
              </div>

              <div>
                <strong>Address</strong>
                <p style={{ marginTop: "8px", lineHeight: 1.8 }}>
                  Ruko Soekarno Hatta Indah No. C9
                  <br />
                  Mojolangu, Lowokwaru
                  <br />
                  Kota Malang, Jawa Timur
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div
            style={{
              background: "#fff",
              padding: "3rem",
              borderRadius: "24px",
              boxShadow: "0 10px 30px rgba(154, 152, 152, 0.08)",
            }}
          >
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  style={inputStyle}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  style={inputStyle}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="Enter your phone number"
                  style={inputStyle}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your feedback..."
                  style={{
                    ...inputStyle,
                    resize: "none",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: "#A6171B",
                  color: "#fff",
                  border: "none",
                  padding: "16px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "15px",
                  marginTop: "10px",
                }}
              >
                Send Feedback
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "16px",
  borderRadius: "12px",
  border: "1px solid #E5E5E5",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "14px",
  boxSizing: "border-box",
  outline: "none",
};