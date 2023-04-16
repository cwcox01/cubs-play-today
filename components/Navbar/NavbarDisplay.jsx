import React from "react";

// importing NavbarItem which contains li element
import NavbarItem from "./NavbarItem";

export default function NavbarDisplay() {
  return (
    <ul className="pe-4 mobile-nav site-nav">
      <NavbarItem navbarUrl="/" navbarText="Home" />
      <NavbarItem navbarUrl="/minors" navbarText="Minors" />
      <NavbarItem navbarUrl="/prospects" navbarText="Prospects" />
      <NavbarItem navbarUrl="/about" navbarText="About" />
    </ul>
  );
}
