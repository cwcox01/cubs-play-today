import React from "react";
import Link from "next/link";

// importing Minors.module.css for css on minors page
import styles from "/styles/Minors.module.css";

export default function MilbButton({ milbBtnUrl, milbBtnText }) {
  return (
    <button className={` ${styles["milb-button"]} `}>
      <Link href={milbBtnUrl} target="_blank" rel="noreferrer">
        <span>{milbBtnText}</span>
      </Link>
    </button>
  );
}
