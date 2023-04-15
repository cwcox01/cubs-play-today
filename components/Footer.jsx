import React from "react";

// importing social media sharing
import { FacebookShareButton, FacebookIcon } from "next-share";
import { TwitterShareButton, TwitterIcon } from "next-share";
import { RedditShareButton, RedditIcon } from "next-share";
import { WhatsappShareButton, WhatsappIcon } from "next-share";
import { EmailShareButton, EmailIcon } from "next-share";
import FooterContent from "./FooterContent";
import FooterNav from "./FooterNav";

export default function Footer() {
  return (
    <footer className="white-text-color d-flex flex-column align-items-center">
      <FooterContent />
      <div className="social-media-share white-background-color d-flex flex-row align-items-center justify-content-center pt-5 gap-2">
        <h6 className="blue-text-color mb-0">Share Me!</h6>
        <FacebookShareButton url={"https://cubsplaytoday.com"}>
          <FacebookIcon className="ms-2" size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={"https://cubsplaytoday.com"}>
          <TwitterIcon className="ms-2" size={32} round />
        </TwitterShareButton>
        <RedditShareButton url={"https://cubsplaytoday.com"}>
          <RedditIcon className="ms-2" size={32} round />
        </RedditShareButton>
        <WhatsappShareButton url={"https://cubsplaytoday.com"}>
          <WhatsappIcon className="ms-2" size={32} round />
        </WhatsappShareButton>
        <EmailShareButton url={"https://cubsplaytoday.com"}>
          <EmailIcon className="ms-2" size={32} round />
        </EmailShareButton>
      </div>
      <FooterNav />
    </footer>
  );
}
