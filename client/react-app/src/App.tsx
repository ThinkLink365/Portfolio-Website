import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/general.css";
import "./assets/styles/components.css";
import "./assets/animations.css";
import "./assets/media-queries.css";

// Lazy-loaded components using React.lazy for code splitting
const Home = lazy(() => import("./pages/Home"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));

const App: React.FC = () => {
  return (
    // Suspense component for handling asynchronous loading
    <Suspense>
      <div id="root">
        {/* Header component rendered at the top of the application */}
        <Header />

        {/* Main content container with maximum width and top margin */}
        <div className="container mt-5" style={{ maxWidth: "100%" }}>
          {/* React Router's Routes component to define application routes */}
          <Routes>
            {/* Route for the home page */}
            <Route path="/" element={<Home />} />

            {/* Route for the portfolio page */}
            <Route path="/portfolio" element={<Portfolio />} />

            {/* Route for the contact page */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer component rendered at the bottom of the application */}
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
