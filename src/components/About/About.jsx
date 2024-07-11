import "./About.scss";

import p1 from "../../assets/img/nat-1-large.jpg";
import p2 from "../../assets/img/nat-2-large.jpg";
import p3 from "../../assets/img/nat-3-large.jpg";

const About = () => {
  return (
    <main>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Exciting tours for adventurous people
          </h2>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              You&apos;re going to fall in love with nature
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
              alias tempore rerum quos repellendus quo, rem sequi, nihil fuga
              quaerat laborum ad.
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Live adventures like you never have before
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              pariatur aut eveniet temporibus aperiam, accusantium deleniti odit
              debitis.
            </p>

            <a href="#" className="btn-text">
              Learn more &rarr;
            </a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                src={p1}
                alt="img_1"
                className="composition__photo composition__photo--p1"
              />
              <img
                src={p2}
                alt="ima_2"
                className="composition__photo composition__photo--p2"
              />
              <img
                src={p3}
                alt="img_3"
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default About;
