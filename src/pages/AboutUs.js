import { PeopleCard } from "../data/aboutUsData";
import { AboutUsPage } from "../data/pagesData";
import "../App.css";
import { Outlet } from "react-router-dom";

export const AboutUs = () => {
  return (
    <div className="Container flex flex-d align-items justify-content">
      {AboutUsPage.map((data) => (
        <>
          <div className="containerTitle flex flex-d align-items justify-content">
            <h1 className="bigTitle">{data.title}</h1>
            <span className="bigText">{data.text}</span>
          </div>
          <img src={data.img} alt="" />
        </>
      ))}

      {/* <div>
        <div>
          <span className="textCategory">Out Mission</span>
          <h2>Out team dedicated to help dinf smart home product</h2>
          <div>
            <div>
              <span>20+</span>
              <span>Years Experience </span>
            </div>
            <div>
              <span>483</span>
              <span>Happy Client </span>
            </div>
            <div>
              <span>150+</span>
              <span>Project Finished</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <span>icon</span>
            <div>
              <span>24/7 supports</span>
              <span>
                24/7 support means a support service that is provided 24 hours a
                day and 7 days a week.
              </span>
            </div>
          </div>
        </div>
      </div> */}

      <div className="margin-top">
        <div>
          <div>
            <h1 className="textCategory">Our Team</h1>
            <h2>Meet our leading and strong team</h2>
          </div>
          <div>
            <span>
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient.
            </span>
          </div>
        </div>
        <div className="about-grid">
          {PeopleCard.map((card) => (
            <>
              <div className="about-item ">
                <img width={"100%"} src={card.img} alt="" />
                <div className="about-name-section">
                  <span className="about-title">{card.name}</span>
                  <br />
                  <span className="article-text">{card.position}</span>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div>
        <h2>Are you interested work with us?</h2>
        <button>Let's Talk</button>
      </div>
    </div>
  );
};
