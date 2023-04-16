import Link from "next/link";
import React from "react";

export default function NavbarItem({ navbarUrl, navbarText }) {
  return (
    <li className="pe-3 d-inline">
      <Link href={navbarUrl}>{navbarText}</Link>
    </li>
  );
}
