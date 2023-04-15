import React from "react";

// importing smaller footer nav item component
import FooterNavItem from "./FooterNavItem";

export default function FooterNav() {
  return (
    <div className="footer-nav white-background-color d-flex justify-content-center pt-5 pb-4">
      <nav>
        <ul className="footer-nav">
          <FooterNavItem footerNavText="Home" footerNavUrl="/" />
          <FooterNavItem footerNavText="Minors" footerNavUrl="/minors" />
          <FooterNavItem footerNavText="Prospects" footerNavUrl="/prospects" />
          <FooterNavItem footerNavText="About" footerNavUrl="/about" />
        </ul>
      </nav>
    </div>
  );
}
