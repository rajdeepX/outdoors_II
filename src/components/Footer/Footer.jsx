import "./Footer.scss";

import logo from "../../assets/img/logo-green-2x.png";
import logo2 from "../../assets/img/logo-green-1x.png";
import logo3 from "../../assets/img/logo-green-small-1x.png";
import logo4 from "../../assets/img/logo-green-small-2x.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__logo-box">
          <picture className="footer__logo">
            <source
              srcSet={`${logo3} 1x, ${logo4} 2x`}
              media="(max-width: 37.5em)"
            />
            <img
              srcSet={`${logo2} 1x, ${logo} 2x`}
              alt="full logo"
              className="footer__logo"
            />
          </picture>

          
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Company
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Contact us
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Careers
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Privacy policy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              Built by{" "}
              <a href="#" className="footer__link">
                Rajdeep Dutta
              </a>{" "}
              for learning purposes. Copyright &copy; by Rajdeep Dutta. You are
              100% allowed to use this webpage for both personal and commercial
              use, but NOT to claim it as your own design. A credit to the
              original author, Jonas Schmedtmann, is of course highly
              appreciated!
            </p>
          </div>
        </div>
        <h4 className="footer__credit">
          <span className="footer__credit-text">Designed by</span>
          Jonas Schmedtmann
        </h4>
      </footer>
    </>
  );
};
export default Footer;
