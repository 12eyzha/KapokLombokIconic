import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ceoImage from "../assets/About/Cahyok.jpeg";
function AboutPage() {
  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#FBF5F0",
          minHeight: "100vh",
          paddingTop: "120px",
        }}
      >
        {/* CONCEPT */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "5rem 2rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
            position: "relative",
          }}
        >
          <img
            src="/logo.png"
            alt="Kapok Lombok"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "450px",
              opacity: 0.05,
              pointerEvents: "none",
            }}
          />

          <div>
            <p
              style={{
                color: "#A6171B",
                fontWeight: 500,
                marginBottom: "1rem",
              }}
            >
              ─ Concept
            </p>

            <h1
              style={{
                fontSize: "4rem",
                color: "#A6171B",
                lineHeight: 1.1,
                margin: 0,
                fontFamily: "'Poppins', sans-serif",
                
              }}
            >
              Pedas Nikmat,
              <br />
              Bikin Kapok!
            </h1>
          </div>

          <div>
            <p
              style={{
                lineHeight: 1.9,
                color: "#333",
                fontSize: "18px",
                textAlign: "justify",
              }}
            >
              Di dunia yang serba cepat, mudah sekali melupakan
              pengalaman makan yang benar-benar berkesan. Kapok
              Lombok hadir sebagai tempat bagi para pecinta pedas
              untuk menikmati hidangan berkualitas dan merasakan
              sensasi rasa yang autentik.
              <br />
              <br />
              Nama "Kapok" memiliki makna yang unik. Bukan sekadar
              rasa pedas yang membuat menyerah, melainkan pengalaman
              kuliner yang begitu nikmat hingga membuat pelanggan
              selalu ingin kembali lagi.
              <br />
              <br />
              Melalui setiap menu yang kami sajikan, kami ingin
              menghadirkan pengalaman makan yang hangat, lezat,
              dan berkesan.
            </p>
          </div>
        </section>

        {/* STORY */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "5rem 2rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "#A6171B",
                fontWeight: 500,
                marginBottom: "1rem",
              }}
            >
              ─ Our Story
            </p>

            <h2
              style={{
                fontSize: "3.5rem",
                color: "#A6171B",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Awal Mula
              <br />
              Kapok Lombok
            </h2>
          </div>

          <div>
            <p
              style={{
                lineHeight: 1.9,
                color: "#333",
                fontSize: "18px",
                textAlign: "justify",
              }}
            >
              Kapok Lombok berawal dari kecintaan terhadap cita rasa
              pedas khas Nusantara yang kaya akan rempah dan rasa.
              Berangkat dari dapur sederhana, kami memiliki mimpi
              untuk menghadirkan makanan pedas berkualitas dengan
              harga yang dapat dinikmati semua kalangan.
              <br />
              <br />
              Dengan bahan pilihan dan racikan sambal khas, setiap
              menu dirancang untuk memberikan pengalaman makan yang
              berkesan. Kepuasan pelanggan menjadi semangat kami
              untuk terus berkembang dan menghadirkan yang terbaik.
            </p>
          </div>
        </section>

        {/* CEO */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "5rem 2rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "#A6171B",
                fontWeight: 500,
                marginBottom: "1rem",
              }}
            >
              ─ Founder & CEO
            </p>

            <h2
              style={{
                fontSize: "3rem",
                color: "#A6171B",
                lineHeight: 1.2,
              }}
            >
              Cahyo B.
            </h2>
          </div>

          <div>
           <img
            src={ceoImage}
            alt="Founder dan CEO Kapok Lombok"
            style={{
              width: "100%",
              borderRadius: "20px",
              objectFit: "cover",
            }}
          />
          </div>

          <div>
            <p
              style={{
                lineHeight: 1.9,
                color: "#333",
                textAlign: "justify",
              }}
            >
              Seorang food enthusiast yang percaya bahwa makanan
              enak dapat menciptakan kebahagiaan sederhana.
              Dengan semangat, kerja keras, dan komitmen terhadap
              kualitas, beliau memimpin Kapok Lombok untuk terus
              berkembang menjadi pilihan pecinta makanan pedas.
            </p>

            <blockquote
              style={{
                marginTop: "2rem",
                borderLeft: "4px solid #A6171B",
                paddingLeft: "1rem",
                color: "#666",
                fontStyle: "italic",
                textAlign: "justify",
              }}
            >
              Kami tidak hanya menyajikan makanan,
              kami menyajikan pengalaman pedas yang
              membuatmu ingin kembali.
            </blockquote>
          </div>
        </section>

        {/* JOURNEY */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "5rem 2rem",
          }}
        >
          <p
            style={{
              color: "#A6171B",
              fontWeight: 500,
            }}
          >
            ─ Our Journey
          </p>

          <h2
            style={{
              fontSize: "3.5rem",
              color: "#A6171B",
              marginBottom: "4rem",
            }}
          >
            Perjalanan Kami
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: "2rem",
              textAlign: "center",
            }}
          >
            {[
              "Berawal dari Dapur Sederhana",
              "Resep Khas & Bahan Pilihan",
              "Berkembang Bersama Pelanggan",
              "Terus Berinovasi",
            ].map((step, index) => (
              <div key={index}>
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "#A6171B",
                    color: "#fff",
                    borderRadius: "50%",
                    margin: "0 auto 1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                  }}
                >
                  {index + 1}
                </div>

                <h4>{step}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* OPERATIONAL */}
        <section
          style={{
            background: "#A6171B",
            color: "#fff",
            padding: "2rem",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-around",
              textAlign: "center",
            }}
          >
            <div>
              <h3>Jam Operasional</h3>
            </div>

            <div>
              <p>Senin - Jumat</p>
              <h2>11.00 - 22.00</h2>
            </div>

            <div>
              <p>Sabtu - Minggu</p>
              <h2>11.00 - 22.00</h2>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            textAlign: "center",
            padding: "6rem 2rem",
          }}
        >
          <h2
            style={{
              color: "#A6171B",
              fontSize: "3rem",
            }}
          >
            Siap menikmati hidangan terbaik kami?
          </h2>

          <p>
            Pilih cara favoritmu untuk menikmati sensasi pedas
            Kapok Lombok.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <Link
              to="/menu"
              style={{
                background: "#A6171B",
                color: "#fff",
                padding: "14px 30px",
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              Pesan Sekarang
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;