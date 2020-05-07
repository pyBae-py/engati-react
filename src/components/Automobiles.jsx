import React from "react";

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
import "./CompStyle.css";

import portfolio1 from "./images/portfolio/portfolio1.jpg";
import portfolio2 from "./images/portfolio/portfolio2.jpg";
import portfolio3 from "./images/portfolio/portfolio3.jpg";
import portfoliobg1 from "./images/portfolio/portfolio-bg1.jpg";
import portfoliobg2 from "./images/portfolio/portfolio-bg2.jpg";
import portfoliobg3 from "./images/portfolio/portfolio-bg3.jpg";

const Automobiles = () => {
  return (
    <div className="Automobiles-wrapper">
      <section id="main-container">
        <div className="container">
          <div className="row about-wrapper-top">
            <div className="col-md-6 ts-padding ">
              <h3>Chatbots for Automobile Dealerships </h3>
              <p>
                "Learn how to build chatbots for Automobile Dealership use
                cases"
              </p>
              <p>
                <a
                  href="#"
                  className="btn btn-primary solid square"
                  id="auto-style-1"
                >
                  Get Started Free<i className="fa fa-long-arrow-right"></i>
                </a>
              </p>
            </div>
            <div
              className="col-md-6 ts-padding about-img"
              id="auto-style=2"
            ></div>
          </div>
        </div>
        <div className="gap-60"></div>

        <div className="container">
          <div className="team">
            <div
              className="tab-pane pl-sm-5 fade animated fadeInLeft about-message"
              role="tabpanel"
            >
              <h3 className="pt-5">The Big Idea</h3>
              <p>
                Customer satisfaction is of utmost importance in the service
                industry. Automation & speed on every touchpoint in customer
                journey exponentially improves your customer experience.{" "}
              </p>
              <p>
                AI Chatbots are helping bring big changes in the Automotive
                industry. By introducing 24x7 availability, automotive chatbots
                help improve your user's experience. They are also a great
                medium to engage with your potential buyers and provide pre
                sales guidance. A lot of businesses update customers on chatbots
                with newsletter & product launches. Key capabilities in the
                industry include:{" "}
              </p>
              <ul className="check-list">
                <li>
                  <i className="fa fa-check"></i> Product Information on Cars{" "}
                </li>
                <li>
                  <i className="fa fa-check"></i> Launch Promotions & Updates{" "}
                </li>
                <li>
                  <i className="fa fa-check"></i> EMI Calculators & Insurance
                  Guidance{" "}
                </li>
                <li>
                  <i className="fa fa-check"></i> Demo & Service Booking
                  appointments{" "}
                </li>
                <li>
                  <i className="fa fa-check"></i> Post Sales & Service Support{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="feature" className="feature">
        <div className="container">
          <div className="row">
            <div className="col-md-12 heading text-center">
              <span className="icon-pentagon wow bounceIn">
                <i className="fa fa-suitcase"></i>
              </span>
              <h2 className="title2">
                Amazing Features
                <span className="title-desc">
                  A Quality Experience Team with 4 years experience
                </span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div
              className="feature-box col-sm-4 wow fadeInDown"
              data-wow-delay=".5s"
            >
              <span className="feature-icon float-left">
                <i className="fa fa-heart-o"></i>
              </span>
              <div className="feature-content">
                <h3>Natural Language Processing</h3>
              </div>
            </div>

            <div
              className="feature-box col-sm-4 wow fadeInDown"
              data-wow-delay=".5s"
            >
              <span className="feature-icon float-left">
                <i className="fa fa-codepen"></i>
              </span>
              <div className="feature-content">
                <h3>Campaigns </h3>
              </div>
            </div>

            <div
              className="feature-box col-sm-4 wow fadeInDown"
              data-wow-delay=".5s"
            >
              <span className="feature-icon float-left">
                <i className="fa fa-film"></i>
              </span>
              <div className="feature-content">
                <h3>Calendar </h3>
              </div>
            </div>
          </div>

          <div className="gap-40"></div>

          <div className="row">
            <div
              className="feature-box col-sm-4 wow fadeInDown"
              data-wow-delay=".5s"
            >
              <span className="feature-icon float-left">
                <i className="fa fa-newspaper-o"></i>
              </span>
              <div className="feature-content">
                <h3>Integration hub </h3>
              </div>
            </div>

            <div
              className="feature-box col-sm-4 wow fadeInDown"
              data-wow-delay=".5s"
            >
              <span className="feature-icon float-left">
                <i className="fa fa-desktop"></i>
              </span>
              <div className="feature-content">
                <h3>Request User Data </h3>
              </div>
            </div>

            <div
              className="feature-box col-sm-4 wow fadeInDown"
              data-wow-delay=".5s"
            >
              <span className="feature-icon float-left">
                <i className="fa fa-pagelines"></i>
              </span>
              <div className="feature-content">
                <h3>Payments </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12 heading text-center">
              <span className="icon-pentagon wow bounceIn">
                <i className="fa fa-meh-o"></i>
              </span>
              <h2 className="title2">
                Benefits
                <span className="title-desc">
                  A Quality Experience Team with 4 years experience
                </span>
              </h2>
            </div>
          </div>
          <div className="row featured-tab">
            <div className="col-md-3 col-sm-5">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className="animated fadeIn nav-link mb-1 active d-flex align-items-center"
                  data-toggle="pill"
                  href="#tab_1"
                  role="tab"
                  aria-selected="true"
                >
                  <i className="fa fa-info-circle mr-4 h3 mb-0"></i>
                  <span className="h4 mb-0 font-weight-bold">Engagement</span>
                </a>
                <a
                  className="animated fadeIn nav-link mb-1 d-flex align-items-center"
                  data-toggle="pill"
                  href="#tab_2"
                  role="tab"
                  aria-selected="true"
                >
                  <i className="fa fa-android mr-4 h3 mb-0"></i>
                  <span className="h4 mb-0 font-weight-bold">Support</span>
                </a>
                <a
                  className="animated fadeIn nav-link mb-1 d-flex align-items-center"
                  data-toggle="pill"
                  href="#tab_3"
                  role="tab"
                  aria-selected="true"
                >
                  <i className="fa fa-android mr-4 h3 mb-0"></i>
                  <span className="h4 mb-0 font-weight-bold">Efficiency</span>
                </a>{" "}
                <span className="h4 mb-0 font-weight-bold">Insurance</span>
              </div>
            </div>
            <div className="col-md-9 col-sm-7">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane pl-sm-5 active fade animated fadeInLeft"
                  id="tab_1"
                  role="tabpanel"
                >
                  <h3>Benefits of Engagement</h3>
                  <ul className="check-list">
                    <li>
                      <i className="fa fa-check"></i> Share Marketing
                      Information & Broadcast
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Schedule Test Drives
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane pl-sm-5 fade animated fadeInLeft"
                  id="tab_2"
                  role="tabpanel"
                >
                  <h3>Benefits of Support</h3>
                  <ul className="check-list">
                    <li>
                      <i className="fa fa-check"></i> Manage Service Requests
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Product Support
                    </li>
                  </ul>
                </div>

                <div
                  className="tab-pane pl-sm-5 fade animated fadeInLeft"
                  id="tab_3"
                  role="tabpanel"
                >
                  <h3>Benefits of Efficiency</h3>
                  <ul className="check-list">
                    <li>
                      <i className="fa fa-check"></i> Reduce Operational Costs
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Round the clock
                      Availability
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Rich Analytics
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="gap-40"></div>

      <section id="portfolio" className="portfolio portfolio-box">
        <div className="container">
          <div className="row">
            <div className="col-md-12 heading text-center">
              <span className="icon-pentagon wow bounceIn">
                <i className="fa fa-suitcase"></i>
              </span>
              <h2 className="title2">
                Templates
                <span className="title-desc">
                  A Quality Experience Team with 4 years experience
                </span>
              </h2>
            </div>
          </div>

          <div id="isotope" className="row isotope">
            <div className="col-sm-3 web-design isotope-item">
              <div className="grid">
                <figure className="m-0 effect-oscar">
                  <img src={portfolio1} alt=""></img>
                  <figcaption>
                    <h3>Automobile Service</h3>
                    <a
                      className="link icon-pentagon"
                      href="portfolio-item.html"
                    >
                      <i className="fa fa-link"></i>
                    </a>
                    <a
                      className="view icon-pentagon"
                      data-rel="prettyPhoto"
                      href={portfoliobg1}
                    >
                      <i className="fa fa-search"></i>
                    </a>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-sm-3 development isotope-item">
              <div className="grid">
                <figure className="m-0 effect-oscar">
                  <img src={portfolio2} alt=""></img>
                  <figcaption>
                    <h3>Rent A Vehicle</h3>
                    <a
                      className="link icon-pentagon"
                      href="portfolio-item.html"
                    >
                      <i className="fa fa-link"></i>
                    </a>
                    <a
                      className="view icon-pentagon"
                      data-rel="prettyPhoto"
                      href={portfoliobg2}
                    >
                      <i className="fa fa-search"></i>
                    </a>
                  </figcaption>
                </figure>
              </div>
            </div>

            <div className="col-sm-3 joomla isotope-item">
              <div className="grid">
                <figure className="m-0 effect-oscar">
                  <img src={portfolio3} alt=""></img>
                  <figcaption>
                    <h3>Test Drive</h3>
                    <a
                      className="link icon-pentagon"
                      href="portfolio-item.html"
                    >
                      <i className="fa fa-link"></i>
                    </a>
                    <a
                      className="view icon-pentagon"
                      data-rel="prettyPhoto"
                      href={portfoliobg3}
                    >
                      <i className="fa fa-search"></i>
                    </a>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Automobiles;
