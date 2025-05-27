import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header style={{ padding: "1rem", background: "#f3f3f3" }}>
    <nav style={{ display: "flex", gap: "1rem" }}>
      <Link to="/">홈</Link>
      <Link to="/services">시술안내</Link>
      <Link to="/portfolio">포트폴리오</Link>
      <Link to="/contact">예약/문의</Link>
    </nav>
  </header>
);

export default Header;
