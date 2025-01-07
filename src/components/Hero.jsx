import React from "react";
import "./Hero.css";
import heroImgMobile from "../assets/images/image-web-3-mobile.jpg";
import heroImgDesktop from "../assets/images/image-web-3-desktop.jpg";
import NewArticle from "./NewArticle";

export default function Hero() {
  return (
    <div className="hero">
      <section>
        <picture>
          <img
            src={heroImgMobile}
            alt="image of legos for mobile"
            className="heroImgMobile"
          />
          <img
            src={heroImgDesktop}
            alt="image of legos for desktop"
            className="heroImgDesktop"
          />
        </picture>
        <div className="heroContent">
          <h1 className="heroTitle">
            The Bright Future of Web <br className="heroBreak" /> 3.0?
          </h1>
          <div className="heroDescription">
            <p className="heroText">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="readMoreBtn">READ MORE</button>
          </div>
        </div>
      </section>
      <NewArticle />
    </div>
  );
}
