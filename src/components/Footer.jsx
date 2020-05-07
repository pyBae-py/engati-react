import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/presets/preset3.css";
import "./plugins/cd-hero/cd-hero.css";
import "./plugins/flex-slider/flexslider.css";
import "./plugins/owl/owl.theme.css";
import "./plugins/owl/owl.carousel.css";
import "./plugins/prettyPhoto.css";
import "./plugins/animate.css";
import "./plugins/fontawesome/font-awesome.min.css";
import "./plugins/bootstrap/bootstrap.min.css";
import "./css/style.css";


const Footer = () => {
  return (
    <div className="Footer-wrapper">
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row" id="row-id">
            <div className="col-md-12 text-center">
              <h3 className="widget-title">Create a Chatbot Now</h3>
              <ul className="footer-social unstyled">
                <li>
                  <a title="Twitter" href="#">
                    <span className="icon-pentagon wow bounceIn">
                      <i className="fa fa-twitter"></i>
                    </span>
                  </a>
                  <a title="Facebook" href="#">
                    <span className="icon-pentagon wow bounceIn">
                      <i className="fa fa-facebook"></i>
                    </span>
                  </a>
                  <a title="Google+" href="#">
                    <span className="icon-pentagon wow bounceIn">
                      <i className="fa fa-google-plus"></i>
                    </span>
                  </a>
                  <a title="linkedin" href="#">
                    <span className="icon-pentagon wow bounceIn">
                      <i className="fa fa-linkedin"></i>
                    </span>
                  </a>
                  <a title="Pinterest" href="#">
                    <span className="icon-pentagon wow bounceIn">
                      <i className="fa fa-pinterest"></i>
                    </span>
                  </a>
                  <a title="Skype" href="#">
                    <span className="icon-pentagon wow bounceIn">
                      <i className="fa fa-skype"></i>
                    </span>
                  </a>
                  <a title="Dribble" href="#">
                    <span className="icon-pentagon wow bounceIn">
                      <i className="fa fa-dribbble"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <p>
                <a href="#" className="btn btn-primary solid square">
                  Get Started<i className="fa fa-long-arrow-right"></i>
                </a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-sm-12 footer-widget">
              <h3 className="widget-title">Quick Links</h3>

              <ul className="unstyled arrow">
                <li>
                  <a href="#">About Engati</a>
                </li>
                <li>
                  <a href="#">How We Help</a>
                </li>
                <li>
                  <a href="#">Upcoming Events</a>
                </li>
                <li>
                  <a href="#">Customer Support</a>
                </li>
                <li>
                  <a href="#">Fill a Form</a>
                </li>
                <li>
                  <a href="#">Latest News</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Shortcodes</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">404 Error Page</a>
                </li>
                <li>
                  <a href="#">Coming Soon</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-sm-12 footer-widget footer-about-us">
              <h3 className="widget-title">About Craft</h3>
              <p>
                We are a awward winning multinational company. We believe in
                quality and standard worldwide.
              </p>
              <p>
                <strong>Address: </strong>1102 Saint Marys, Junction City, KS
              </p>
              <div className="row">
                <div className="col-md-6">
                  <strong>Email: </strong>
                  <p>info@Engati.com</p>
                </div>
                <div className="col-md-6">
                  <strong>Phone No.</strong>
                  <p>+(111) 222-333</p>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </footer>

      <section id="copyright" className="copyright angle">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="copyright-info">
                &copy; All rights reserved | Developed by{" "}
                <a href="https://www.facebook.com/ahmadsiddiquech">
                  Ahmad Siddique
                </a>
              </div>
            </div>
          </div>
          <a href="#" target="_blank" className="float float-hover">
            <i className="fa fa-whatsapp fa-2x my-float"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
