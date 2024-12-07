import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTop() {
  const { pathname } = useLocation();
  console.log("Scroll top");
  useEffect(() => {
    window && window.scroll(0, 0);
  }, [pathname]);
  return null;
}
