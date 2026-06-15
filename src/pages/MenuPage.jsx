import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import MenuBanner from "../components/MenuBanner";
import MenuCategory from "../components/MenuCategory";
import Banner2 from "../assets/Banner/Banner2.jpg";

import menuData from "../data/Products";

function MenuPage() {
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
        <MenuBanner />

        <main
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "2rem 1rem 4rem",
          }}
        >
          <MenuCategory
            title="Menu Utama"
            items={menuData.menuUtama}
          />

          <MenuCategory
            title="Menu Ikan"
            items={menuData.menuIkan}
          />

          <MenuCategory
            title="Pelengkap"
            items={menuData.pelengkap}
          />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default MenuPage;