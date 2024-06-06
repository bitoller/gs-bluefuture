import { Cover } from "../pages/Cover";
import { Home } from "../pages/Home";
import { About } from "../pages/AboutTheCorals";
import { Monitoring } from "../pages/Monitoring";
import { Restoration } from "../pages/Restoration";
import { Contribution } from "../pages/Contribution";
import { PageNotFound } from "../pages/PageNotFound";
import { ScrollToTop } from "../components/ScrollToTop";
import { Route, Routes, Navigate } from "react-router-dom";

export function MainRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/welcome" element={<Cover />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about_the_corals" element={<About />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/restoration" element={<Restoration />} />
        <Route path="/contribution" element={<Contribution />} />
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
