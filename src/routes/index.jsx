import { Route, Routes, Navigate } from "react-router-dom";
import { Cover } from "../pages/Cover";
import { Home } from "../pages/Home";
import { About } from "../pages/AboutTheCorals";
import { Idea } from "../pages/TheIdea";
import { Donate } from "../pages/Donate";
import { PageNotFound } from "../pages/PageNotFound";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/welcome" element={<Cover />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/the_idea" element={<Idea />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/" element={<Navigate to="/welcome" />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
