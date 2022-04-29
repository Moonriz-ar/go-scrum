import React from "react";

function DesktopLayout({ children }) {
  return <section className="grid grid-cols-3 gap-5">{children}</section>;
}

export default DesktopLayout;
