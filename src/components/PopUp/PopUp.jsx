import "./PopUp.scss";

import img1 from "../../assets/img/nat-8.jpg";
import img2 from "../../assets/img/nat-9.jpg";

const PopUp = () => {
  return (
    <>
      <div className="popup" id="popup">
        <div className="popup__content">
          <div className="popup__left">
            <img src={img1} alt="tour photo" className="popup__img" />
            <img src={img2} alt="tour photo" className="popup__img" />
          </div>
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary u-margin-bottom-small">
              Start booking now
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Important &ndash; Please read these terms before booking
            </h3>
            <p className="popup__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              sapiente officiis nam corrupti distinctio? Officiis assumenda
              saepe adipisci modi officia quae soluta cumque dolorum sint
              quisquam. Tenetur, ipsam quidem magnam veniam tempora quae
              voluptatibus deserunt, exercitationem saepe perferendis, inventore
              maiores maxime voluptatem dolores. Perferendis voluptatem numquam
            </p>
            <a className="btn btn--green">Book now</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default PopUp;
