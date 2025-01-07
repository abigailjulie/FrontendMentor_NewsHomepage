import React from "react";
import "./NumArticles.css";
import img1 from "../assets/images/image-retro-pcs.jpg";
import img2 from "../assets/images/image-top-laptops.jpg";
import img3 from "../assets/images/image-gaming-growth.jpg";

//Maping simliar similar content dynamically
const articles = [
  {
    id: 1,
    imgSrc: img1,
    alt: "Image of an old computer with a large montior",
    topic: "Reviving Retro PCs",
    text: "What happens when old PCs are given modern upgrades?",
  },
  {
    id: 2,
    imgSrc: img2,
    alt: "Closeup image of backlit key board with a red light",
    topic: "Top 10 Laptops of 2022",
    text: "Our best picks for various needs and budgets.",
  },
  {
    id: 3,
    imgSrc: img3,
    alt: "Image of a white hand tossing up a white Xbox controller",
    topic: "The Growth of Gaming",
    text: "How the pandeic has sparked fresh oppurtunities.",
  },
];

export default function NumArticles() {
  return (
    <>
      <article className="dynamicArticles">
        {articles.map((article) => {
          return (
            <section key={article.id} className="d-flex dynArticle">
              <figure className="dynArtImg">
                <img src={article.imgSrc} alt={article.alt} />
              </figure>
              <div className="dynArtContent">
                <p className="dynArtID">0{article.id}</p>
                <h2 className="dynArtTopic">{article.topic}</h2>
                <p className="dynArtText">{article.text}</p>
              </div>
            </section>
          );
        })}
      </article>
    </>
  );
}
