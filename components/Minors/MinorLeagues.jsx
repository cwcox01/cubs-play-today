import React from "react";

// importing smaller components
import TripleAAA from "./TrippleAAA";
import DoubleAA from "./DoubleAA";
import AdvA from "./AdvA";
import LowA from "./LowA";

// css styles are being imported from Minors.module.css to the MinorsButton.jsx file
// the css module mainly affects the button styling

export default function MinorLeagues() {
  return (
    <>
      <h2 className="site-padding white-text-color mt-4">Minor Leagues</h2>
      <TripleAAA />
      <DoubleAA />
      <AdvA />
      <LowA />
    </>
  );
}
