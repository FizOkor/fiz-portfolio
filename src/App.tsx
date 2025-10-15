import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}
