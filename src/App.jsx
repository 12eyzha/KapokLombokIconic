import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import FeedbackPage from "./pages/FeedbackPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/menu"
          element={<MenuPage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/feedback"
          element={<FeedbackPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;