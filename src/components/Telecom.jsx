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
import portfoliobg1 from "./images/portfolio/portfolio-bg1.jpg";
import portfoliobg2 from "./images/portfolio/portfolio-bg2.jpg";
import banner1 from "./images/banner/banner1.jpg";

const Telecom = () => {
  return (
    <div className="Telecom-wrapper">
      <div id="banner-area">
        <img src={banner1} alt=""></img>
        <div className="parallax-overlay"></div>

        <div className="banner-title-content">
          <div className="text-center">
            <h2>Telecom Solutions</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item text-white" aria-current="page">
                  Telecom
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <section id="main-container">
        <div className="container">
          <div className="row about-wrapper-top">
            <div className="col-md-6 ts-padding ">
              <h3>Chatbots for Telecom </h3>
              <p>"Learn how to build chatbots for Telecom use cases"</p>
              <p>
                <a
                  href="#"
                  className="btn btn-primary solid square"
                  id="telecom-style-1"
                >
                  Get Started Free<i className="fa fa-long-arrow-right"></i>
                </a>
              </p>
            </div>

            <div
              className="col-md-6 ts-padding about-img"
              id="telecom-style-2"
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
                Managing your customer base with a large number of customer
                support agents? With new and improved technologies customer
                expectations are high.{" "}
              </p>
              <p>
                Smart Chatbots or assistants provide a 24x7x365 ability for
                automating support. IVR integration can further improve the
                support experience. The conversation experience today also
                accounts for automating the most common tasks. These could
                include plan guidance or switches, payments, ticket tracking &
                more. Finally, chatbots help you engage with your customers with
                new plan launches & promotions. Key capabilities that you can
                rollout include:{" "}
              </p>
              <ul className="check-list">
                <li>
                  <i className="fa fa-check"></i> Plan Guidance & Up-sells{" "}
                </li>
                <li>
                  <i className="fa fa-check"></i> Customer Support{" "}
                </li>
                <li>
                  <i className="fa fa-check"></i> Payments Reminders & handling{" "}
                </li>
                <li>
                  <i className="fa fa-check"></i> IVR Automation{" "}
                </li>
                <li>
                  <i className="fa fa-check"></i> Promotional Campaigns
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
                <h3>Voice Support </h3>
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
                <h3>Integrations</h3>
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
                <h3>Request User Data </h3>
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
                <h3>Live Chat </h3>
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
                <h3>Broadcast Notifications</h3>
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
                  <span className="h4 mb-0 font-weight-bold">To employees</span>
                </a>
                <a
                  className="animated fadeIn nav-link mb-1 d-flex align-items-center"
                  data-toggle="pill"
                  href="#tab_2"
                  role="tab"
                  aria-selected="true"
                >
                  <i className="fa fa-android mr-4 h3 mb-0"></i>
                  <span className="h4 mb-0 font-weight-bold">To customers</span>
                </a>
              </div>
            </div>

            <div className="col-md-9 col-sm-7">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane pl-sm-5 active fade animated fadeInLeft"
                  id="tab_1"
                  role="tabpanel"
                >
                  <h3>Benefits for employees</h3>
                  <ul className="check-list">
                    <li>
                      <i className="fa fa-check"></i> Manage Customers Requests
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Assign customer Call
                      Requests
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Send Payment Reminders
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Send Offer Communications
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Interaction Analytics
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane pl-sm-5 fade animated fadeInLeft"
                  id="tab_2"
                  role="tabpanel"
                >
                  <h3>Benefits for customers</h3>
                  <ul className="check-list">
                    <li>
                      <i className="fa fa-check"></i> Get Basic Technical
                      Queries Answered
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Get Plan Information &
                      Deal Information
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Account & Plan Management
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Get Live Chat Support
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Bill Payment Notifications
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
                  <img src={portfolio1} alt=""></img>>
                  <figcaption>
                    <h3>Telecom Bot</h3>
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
                    <h3>Tech Desk Bot</h3>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Telecom;
