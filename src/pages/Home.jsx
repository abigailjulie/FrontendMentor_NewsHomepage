import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarTop from "../components/NavBarTop";
import Hero from "../components/Hero";
import NumArticles from "../components/NumArticles";

export default function Home() {
  return (
    <div>
        <NavBarTop />
        <Hero />
        <NumArticles />
    </div>
  );
}
