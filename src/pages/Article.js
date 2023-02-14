import { ArticleCard } from "../data/articleCard";
import { ArticlePage } from "../data/pagesData";
import "../App.css";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/context";

export const Article = () => {
  const { setData, data } = useContext(DataContext);

  useEffect(() => {
    console.log("ahahs");
    console.log(data);
  }, []);
  return (
    <div className="flex flex-d align-items justify-content">
      {ArticlePage.map((data, index) => (
        <div key={index}>
          <div className="containerTitle flex flex-d align-items justify-content">
            <h1 className="bigTitle">{data.title}</h1>
            <span className="bigText">{data.text}</span>
          </div>
          <img src={data.img} alt="" />
        </div>
      ))}
      <div className="margin-top">
        <h1>Article</h1>
        <span>
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item
        </span>
        <div>
          <img
            src={require("../assets/page/article/ArticlePage.png")}
            alt="img"
          />
          <div>
            <span>Tips and Trick</span>
            <span>
              This 400-Square-Foot New York Apartment Is Maximized With Custom
              Millwork
            </span>
            avatar
          </div>
        </div>
      </div>
      <div className="margin-top">
        <span className="textCategory">Daily News</span>
        <h2>Today top headlines</h2>
        {ArticleCard.map((card, index) => (
          <div key={index} className="articleBody articleItem">
            <img width={"280px"} src={card.img} alt="" />
            <div>
              <span className="article-text">{card.cotegory}</span>
              <h2>{card.title}</h2>
              <span className="article-text">{card.text}</span>
              <div>
                {card.user.map((avatar, index) => (
                  <div className="article-sub" key={index}>
                    <div>
                      <img src={avatar.img} alt="" />
                      <span className="article-sub-title">{avatar.name}</span>
                    </div>
                    <span className="article-text">{avatar.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2>Subscribe our newsletter</h2>
        <button>Let's Talk</button>
      </div>
    </div>
  );
};
