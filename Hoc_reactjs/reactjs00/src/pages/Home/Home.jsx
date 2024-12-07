import React from "react";
import "./Home.css";
import Carosel from "./Carousel.jsx/Carosel";
import BestSeller from "./BestSeller/BestSeller";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Carosel />
      <BestSeller />
    </div>
  );
}
