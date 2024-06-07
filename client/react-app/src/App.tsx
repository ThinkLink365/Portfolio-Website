import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
const Home = lazy(() => import("./pages/Home"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
import Footer from "./components/Footer";
import styled, { keyframes, css } from "styled-components";
import { useEffect, useState } from "react";

export const shake = keyframes`
  0% { transform: translate(0px, 0px) rotate(0deg); }
  10% { transform: translate(-5px, -5px) rotate(-5deg); }
  20% { transform: translate(-15px, 0px) rotate(5deg); }
  30% { transform: translate(15px, 10px) rotate(0deg); }
  40% { transform: translate(5px, -5px) rotate(10deg); }
  50% { transform: translate(-10px, 15px) rotate(-10deg); }
  60% { transform: translate(-20px, 5px) rotate(0deg); }
  70% { transform: translate(20px, 5px) rotate(-10deg); }
  80% { transform: translate(-5px, -5px) rotate(10deg); }
  90% { transform: translate(5px, 15px) rotate(0deg); }
  100% { transform: translate(5px, -15px) rotate(-10deg); }
`;

export const ShakeContainer = styled.div<{ isShaking: boolean }>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;

  ${(props) =>
    props.isShaking &&
    css`
      animation: ${shake} 0.5s;
    `}
`;

const App: React.FC = () => {
  const [isShaking, setIsShaking] = useState(false);
  const [thwompOccurred, setThwompOccurred] = useState(false);
  const location = useLocation();

  const triggerShake = () => {
    if (!thwompOccurred) {
      setIsShaking(true);
      setThwompOccurred(true);
      setTimeout(() => setIsShaking(false), 300);
    }
  };

  useEffect(() => {
    setThwompOccurred(false);
  }, [location]);

  return (
    <ShakeContainer isShaking={isShaking}>
      <Header />

      <div className="container mt-5">
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route
              path="/contact"
              element={<Contact onThwompHitBottom={triggerShake} />}
            />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </ShakeContainer>
  );
};

export default App;
