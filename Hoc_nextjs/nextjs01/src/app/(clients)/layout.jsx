import Menu from "@/components/Menu";
import React from "react";

export default function ClientLayout({ children }) {
  return (
    <div className="client-app container">
      <div className="row">
        <div className="col-3 nav ">
          <Menu />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </div>
  );
}
