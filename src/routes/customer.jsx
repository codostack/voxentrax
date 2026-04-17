import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/page";
import About from "../pages/About/page";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Contact from "../pages/Contact/page";
import Services from "../pages/Services/page";
import FAQ from "../pages/Faq/page";
import RateTable from "../pages/Rate/page";
import PopupRateTable from "../pages/Rate/popup";
import NotFound from "../components/NotFound";

const PublicRoutes = () => {
  return (
    <>
      <Navbar />
      <PopupRateTable />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rate" element={<RateTable />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        {/* 404 inside PUBLIC */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default PublicRoutes;