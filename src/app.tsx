import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import ScrollToTop from "./components/scroll-to-top";
import { ThemeProvider } from "./components/theme-provider";
import Home from "./pages/home";
import Photos from "./pages/photos";
import Works from "./pages/works";

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <ThemeProvider storageKey="vite-ui-theme">
        <Header />
        <LazyMotion features={domAnimation}>
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/works" element={<Works />} />
            </Routes>
          </AnimatePresence>
        </LazyMotion>
        <Footer />
      </ThemeProvider>
    </>
  );
}
