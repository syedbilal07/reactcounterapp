import React from "react";

// Stateless Functional Component
export const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");
  return (
    <nav href="background.jpg">
      <a className="navbar-brand" href="http://localhost:3000">
        Navbar{" "}
        <span className="badge-pill badge-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
