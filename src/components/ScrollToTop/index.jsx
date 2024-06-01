import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { StyledScrollToTop } from "./style.js";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
