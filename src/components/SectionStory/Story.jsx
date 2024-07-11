import "./Story.scss";

import p1 from "../../assets/img/nat-8.jpg";
import p2 from "../../assets/img/nat-9.jpg";
import v1 from "../../assets/img/video.mp4";
import v2 from "../../assets/img/video.webm";

const Story = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={v1} type="video/mp4" />
          <source src={v2} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={p1} alt="person on a tour" className="story__img" />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best week ever with my family
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              similique doloribus iure saepe. Reprehenderit, quam quae
              voluptatem, harum facere tempore optio asperiores corporis sunt
              similique doloribus iure saepe. Reprehenderit, quam quae
              voluptatem, harum facere tempore optio
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={p2} alt="person on a tour" className="story__img" />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              WOW! My life is completely different now
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              similique doloribus iure saepe. Reprehenderit, quam quae
              voluptatem, harum facere tempore optio asperiores corporis sunt
              similique doloribus iure saepe. Reprehenderit, quam quae
              voluptatem, harum facere tempore optio
            </p>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
};
export default Story;
