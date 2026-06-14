import { useEffect } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Footer from "../components/Footer";

function SEOMeta() {
  useEffect(() => {
    document.title = "Kapok Lombok – Kuliner Pedas Modern Malang";

    const setMeta = (name, content, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);

      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }

      el.setAttribute("content", content);
    };

    setMeta(
      "description",
      "Kapok Lombok Iconic – Brand kuliner pedas modern di Malang. Nikmati sensasi panas dan menggugah selera di Jl. Soekarno Hatta Indah No.C9, Mojolangu, Lowokwaru."
    );
    setMeta(
      "keywords",
      "kapok lombok Iconic, kuliner pedas malang, makanan pedas, restaurant malang, soekarno hatta malang"
    );
    setMeta("robots", "index, follow");
    setMeta("geo.region", "ID-JI");
    setMeta("geo.placename", "Malang, Jawa Timur");
    setMeta("og:title", "Kapok Lombok – Kuliner Pedas Modern Malang", true);
    setMeta(
      "og:description",
      "Sensasi pedas yang autentik dan menggugah selera di jantung Kota Malang.",
      true
    );
    setMeta("og:type", "restaurant", true);
    setMeta("og:locale", "id_ID", true);

    const canonical =
      document.querySelector("link[rel='canonical']") ||
      (() => {
        const l = document.createElement("link");
        l.rel = "canonical";
        document.head.appendChild(l);
        return l;
      })();

    canonical.href = "https://kapoklombok.id";
  }, []);

  return null;
}

function Concept() {
  return (
    <section
      style={{
        background: "#FBF5F0",
        padding: "5rem 5% 4rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "#fff",
          border: "3px solid #eee",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          margin: "0 auto 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src="src/assets/Logo/Logo.jpeg"
          alt="Kapok Lombok"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <h2
        style={{
          fontFamily: "'Playfair Display', 'Georgia', serif",
          fontSize: "2.8rem",
          fontWeight: 700,
          color: "#1a1a1a",
          margin: "0 0 1.5rem",
        }}
      >
        Concept
      </h2>

      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "15px",
          lineHeight: 1.85,
          color: "#555",
          maxWidth: "680px",
          margin: "0 auto",
        }}
      >
        KAPOK LOMBOK merupakan brand kuliner dengan konsep makanan pedas yang
        dikemas secara modern dan playful. Brand ini menggunakan maskot chef
        cabai sebagai identitas utama untuk menciptakan kesan unik dan mudah
        diingat. Perpaduan warna merah, orange, dan kuning dipilih untuk
        menggambarkan sensasi panas dan menggugah selera. KAPOK LOMBOK
        ditujukan bagi pecinta makanan pedas, khususnya kalangan anak muda yang
        menyukai pengalaman kuliner seru dan berkesan.
      </p>
    </section>
  );
}

function VisiMisi() {
  return (
    <section
      style={{
        background: "#FBF5F0",
        padding: "4rem 5%",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "3rem",
          maxWidth: "860px",
          margin: "0 auto",
        }}
      >
        {[
          {
            title: "Visi",
            text: "Menjadi brand kuliner pedas yang unggul dan terpercaya dengan menghadirkan cita rasa autentik, kualitas bahan terbaik, serta pengalaman kuliner yang unik, berkesan, dan mampu memuaskan para penikmat makanan pedas dari berbagai kalangan.",
          },
          {
            title: "Misi",
            text: "Menyajikan berbagai menu pedas berkualitas dengan cita rasa khas yang autentik, menggunakan bahan-bahan terbaik, serta memberikan pelayanan yang ramah dan menyenangkan untuk menciptakan pengalaman kuliner yang berkesan bagi setiap pelanggan.",
          },
        ].map(({ title, text }) => (
          <div key={title} style={{ textAlign: "center" }}>
            <h3
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                fontSize: "2.2rem",
                fontWeight: 700,
                color: "#1a1a1a",
                margin: "0 0 1rem",
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "14.5px",
                lineHeight: 1.8,
                color: "#666",
                margin: 0,
              }}
            >
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section
      id="about"
      style={{
        background: "#FBF5F0",
        padding: "4rem 5%",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "'Playfair Display', 'Georgia', serif",
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "#1a1a1a",
              margin: "0 0 1.5rem",
              textAlign: "center",
            }}
          >
            About Us
          </h2>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "14.5px",
              lineHeight: 1.85,
              color: "#666",
              margin: 0,
            }}
          >
            Kapok Lombok lahir dari semangat untuk menghadirkan pengalaman
            kuliner pedas yang autentik dan berkesan di Kota Malang. Kami
            berdedikasi untuk menyajikan hidangan dengan kualitas terbaik,
            menggunakan bahan-bahan segar pilihan yang diolah dengan penuh cinta
            dan keahlian. Setiap gigitan adalah petualangan rasa yang tak
            terlupakan, dirancang khusus untuk para pecinta pedas yang sejati.
          </p>
        </div>

        <div
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          aspectRatio: "4/3",
        }}
      >
        <img
          src="src/assets/About/KIELL.jpg"
          alt="Toko Kapok Lombok"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "15% 65%",
            display: "block",
          }}
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/600x450/A6171B/ffffff?text=Kapok+Lombok";
          }}
        />
      </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&family=Playfair+Display:wght@700&family=Poppins:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <div style={{ background: "#FBF5F0", minHeight: "100vh" }}>
      <SEOMeta />
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <VisiMisi />
        <AboutUs />
        <Products />
      </main>
      <Footer />
    </div>
  );
}