import { Route, Routes, Navigate } from "react-router-dom";
import { Cover } from "../pages/Cover/index.cover";
import { Home } from "../pages/Home/index.home";
import { About } from "../pages/AboutTheCorals/index.aboutcorals";
import { Idea } from "../pages/TheIdea/index.idea";
import { Donate } from "../pages/Donate/index.donate";
import { PageNotFound } from "../pages/PageNotFound/index.notfound";

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
