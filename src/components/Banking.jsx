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
import portfolio4 from "./images/portfolio/portfolio4.jpg";
import portfolio5 from "./images/portfolio/portfolio5.jpg";
import portfoliobg1 from "./images/portfolio/portfolio-bg1.jpg";
import portfoliobg2 from "./images/portfolio/portfolio-bg2.jpg";
import portfoliobg3 from "./images/portfolio/portfolio-bg3.jpg";
import banner1 from "./images/banner/banner1.jpg";
const Banking = () => {
  return (
    <div className="Banking-wrapper">
      <div id="banner-area">
        <img src={banner1} alt="" ></img>
        <div class="parallax-overlay"></div>
        <div class="banner-title-content">
          <div class="text-center">
            <h2>Banking Solutions</h2>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item">
                  <a href="index.php">Home</a>
                </li>
                <li class="breadcrumb-item text-white" aria-current="page">
                  Banking & Finance
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
              <h3>Chatbots for Banking, Finance & Insurance Services</h3>
              <p>"Learn how to build chatbots for BFSI use cases"</p>
              <p>
                <a
                  href="#"
                  className="btn btn-primary solid square"
                  id="style-1"
                >
                  Get Started Free<i className="fa fa-long-arrow-right"></i>
                </a>
              </p>
            </div>
            <div className="col-md-6 ts-padding about-img" id="style-2"></div>
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
                BFSI sector has recently seen big improvements in services,
                security, and availability standards. Machine Learning and
                Artificial Intelligence have been at the forefront of this
                change.
              </p>
              <p>
                Smart banking chatbots now are digital assistants that engage
                well with the customers. They can fetch information and execute
                transactions in real-time. This allows regular banking
                transactions to be available on command of your customers. Key
                capabilities include:
              </p>
              <ul className="check-list">
                <li>
                  <i className="fa fa-check"></i> Lead generation{" "}
                </li>
                <li>
                  <i className="fa fa-check"></i> Product Selection and
                  Marketing
                </li>
                <li>
                  <i className="fa fa-check"></i> Promotional messages in a
                  sales push{" "}
                </li>
                <li>
                  <i className="fa fa-check"></i> Claim & Premium Processing
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
                <h3>Integration Hub</h3>
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
                <h3>Payments</h3>
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
                <h3>Script Node</h3>
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
                <h3>File Uploads </h3>
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
                  <span className="h4 mb-0 font-weight-bold">
                    Retail Banking
                  </span>
                </a>
                <a
                  className="animated fadeIn nav-link mb-1 d-flex align-items-center"
                  data-toggle="pill"
                  href="#tab_2"
                  role="tab"
                  aria-selected="true"
                >
                  <i className="fa fa-android mr-4 h3 mb-0"></i>
                  <span className="h4 mb-0 font-weight-bold">
                    Wealth Management
                  </span>
                </a>
                <a
                  className="animated fadeIn nav-link mb-1 d-flex align-items-center"
                  data-toggle="pill"
                  href="#tab_3"
                  role="tab"
                  aria-selected="true"
                >
                  <i className="fa fa-android mr-4 h3 mb-0"></i>
                  <span className="h4 mb-0 font-weight-bold">
                    Payments & Transfers
                  </span>
                </a>
                <a
                  className="animated fadeIn nav-link mb-1 d-flex align-items-center"
                  data-toggle="pill"
                  href="#tab_4"
                  role="tab"
                  aria-selected="true"
                >
                  <i className="fa fa-pagelines mr-4 h3 mb-0"></i>
                  <span className="h4 mb-0 font-weight-bold">
                    Payments & Transfers
                  </span>
                </a>
                <a
                  className="animated fadeIn nav-link mb-1 d-flex align-items-center"
                  data-toggle="pill"
                  href="#tab_5"
                  role="tab"
                  aria-selected="true"
                >
                  <i className="fa fa-support mr-4 h3 mb-0"></i>
                  <span className="h4 mb-0 font-weight-bold">Insurance</span>
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
                  <h3>Benefits of Retail Banking</h3>
                  <ul className="check-list">
                    <li>
                      <i className="fa fa-check"></i> Account Registration
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Report Loss of cards
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Reset Passwords
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Apply for new Services
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Close existing Services
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane pl-sm-5 fade animated fadeInLeft"
                  id="tab_2"
                  role="tabpanel"
                >
                  <h3>Benefits of Wealth Management</h3>
                  <ul className="check-list">
                    <li>
                      <i className="fa fa-check"></i> Mutual Fund and Equity
                      Transactions
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Monitor Portfolio
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Modify Portfolio
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Query for Risk Assessment
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Search for Market Trends
                    </li>
                  </ul>
                </div>

                <div
                  className="tab-pane pl-sm-5 fade animated fadeInLeft"
                  id="tab_3"
                  role="tabpanel"
                >
                  <h3>Benefits of Payments & Transfers</h3>
                  <ul className="check-list">
                    <li>
                      <i className="fa fa-check"></i> Transfer money
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Add/modify payee
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Add new user account
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Realtime information based
                      on markets
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane pl-sm-5 fade animated fadeInLeft"
                  id="tab_4"
                  role="tabpanel"
                >
                  <h3>Marketing Benefits</h3>
                  <ul className="check-list">
                    <li>
                      <i className="fa fa-check"></i> Product Notifications
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Communicate Deals & Offers{" "}
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Lead Generation
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Lead Qualification
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane pl-sm-5 fade animated fadeInLeft"
                  id="tab_5"
                  role="tabpanel"
                >
                  <h3>Insurance Benefits</h3>
                  <ul className="check-list">
                    <li>
                      <i className="fa fa-check"></i> Generate Quotes
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Lead Generation
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Submit Claims
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Claim Tracking
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Buy Insurance
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
                    <h3>Healthcare</h3>
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
                    <h3>Salon Scheduler</h3>
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
                    <h3>Weight Loss</h3>
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

            <div className="col-sm-3 wordpress isotope-item">
              <div className="grid">
                <figure className="m-0 effect-oscar">
                  <img src={portfolio4} alt=""></img>
                  <figcaption>
                    <h3>Plastic Surgery</h3>
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

            <div className="col-sm-3 joomla isotope-item">
              <div className="grid">
                <figure className="m-0 effect-oscar">
                  <img src={portfolio5} alt=""></img>
                  <figcaption>
                    <h3>Tele Health</h3>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banking;
