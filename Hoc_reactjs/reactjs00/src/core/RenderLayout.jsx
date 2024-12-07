import React from "react";
import { publicRoutes } from "../routes/publicRoute";
import { Routes, Route } from "react-router-dom";
import { privateRoutes } from "../routes/privateRoute";

export default function RenderLayout() {
  return (
    <div>
      <Routes>
        {publicRoutes}
        {privateRoutes}
      </Routes>
    </div>
  );
}
