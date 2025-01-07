import React from "react";
import "./NewArticle.css";

export default function NewArticle() {
  return (
    <div>
      <section className="newArticle" aria-labelledby="newArticleTitle">
        <h2 className="newTitle" id="newArticleTitle">
          New
        </h2>
        {/* Article 1 */}
        <article aria-labelledby="article1Heading">
          <h3 id="article1Heading" className="newHeading">
            Hydrogen VS Electric Cars
          </h3>
          <p className="newText">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </article>

        <hr className="newArticleBreak" />

        {/* Article 2 */}
        <article aria-labelledby="article2Heading">
          <h3 id="article2Heading" className="newHeading">
            The Downsides of AI Artistry
          </h3>
          <p className="newText">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </article>

        <hr className="newArticleBreak" />

        {/* Article 3 */}
        <article aria-labelledby="article3Heading">
          <h3 id="article3Heading" className="newHeading">
            Is VC Funding Drying Up?
          </h3>
          <p className="newText">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </article>
      </section>
    </div>
  );
}
