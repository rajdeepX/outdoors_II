import "./About.scss";

import p1 from "../../assets/img/nat-1-large.jpg";
import p11 from "../../assets/img/nat-1.jpg";
import p2 from "../../assets/img/nat-2-large.jpg";
import p22 from "../../assets/img/nat-2.jpg";
import p3 from "../../assets/img/nat-3-large.jpg";
import p33 from "../../assets/img/nat-3.jpg";

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
                srcSet={`${p11} 300w, ${p1} 1000w`}
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="photo 1"
                className="composition__photo composition__photo--p1"
                src={p1}
              />
              <img
                srcSet={`${p22} 300w, ${p2} 1000w`}
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="photo 2"
                className="composition__photo composition__photo--p2"
                src={p2}
              />
              <img
                srcSet={`${p33} 300w, ${p3} 1000w`}
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="photo 3"
                className="composition__photo composition__photo--p3"
                src={p3}
              />
              {/* <img
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
              /> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default About;
