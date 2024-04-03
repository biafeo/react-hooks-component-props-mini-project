import React from "react";
import blogData from "../data/blog.js";

function Header() {
  return (
    <header>
      <h1>{blogData.name}</h1>
    </header>
  );
}
export default Header;
