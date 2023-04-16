import React from "react";

// importing smaller components
import FooterContent from "./FooterContent";
import FooterNav from "./FooterNav";
import FooterSocialMedia from "./FooterSocialMedia";

export default function Footer() {
  return (
    <footer className="white-text-color d-flex flex-column align-items-center">
      <FooterContent />
      <FooterSocialMedia />
      <FooterNav />
    </footer>
  );
}
