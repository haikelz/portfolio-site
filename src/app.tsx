import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { ThemeProvider } from "./components/theme-provider";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
