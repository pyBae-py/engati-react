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

const SalesMarketing = () => {
  return (
    <div className="SalesMarketing-wrapper">
      <div id="banner-area">
        <img src={banner1} alt=""></img>
        <div class="parallax-overlay"></div>

        <div class="banner-title-content">
          <div class="text-center">
            <h2>Sales & Marketing</h2>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li class="breadcrumb-item text-white" aria-current="page">
                  Sales & Marketing
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <section id="main-container">
        <div class="container">
          <div class="row about-wrapper-top">
            <div class="col-md-6 ts-padding ">
              <h3>Chatbots for Automated Sales and Marketing</h3>
              <p>"Learn how to build chatbots for BFSI use cases"</p>
              <p>
                <a
                  href="#"
                  class="btn btn-primary solid square"
                  id="travel-style-1"
                >
                  Get Started Free<i class="fa fa-long-arrow-right"></i>
                </a>
              </p>
            </div>

            <div
              class="col-md-6 ts-padding about-img"
              id="travel-style-2"
            ></div>
          </div>
        </div>

        <div class="gap-60"></div>

        <div class="container">
          <div class="team">
            <div
              class="tab-pane pl-sm-5 fade animated fadeInLeft about-message"
              role="tabpanel"
            >
              <h3 class="pt-5">The Big Idea</h3>
              <p>
                30% of top-performing companies today use AI-powered marketing
                chatbots to deliver superior marketing experiences.
              </p>
              <p>
                A lot of these experiences are being driven by 24x7
                availability. Digital assistants are at the forefront of
                enabling an always-on presence for businesses. Sales bots answer
                product queries and help nurture leads to sales completion. They
                also help with personalized marketing and social media reach.
                There are a range of automation opportunities in sales &
                marketing. Key capabilities include:
              </p>
              <ul class="check-list">
                <li>
                  <i class="fa fa-check"></i> Lead generation{" "}
                </li>
                <li>
                  <i class="fa fa-check"></i> Lead Nurturing and Closure
                </li>
                <li>
                  <i class="fa fa-check"></i> Promotional Campaigns across
                  Social Media
                </li>
                <li>
                  <i class="fa fa-check"></i> Customer Engagement and Analytics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="feature" class="feature">
        <div class="container">
          <div class="row">
            <div class="col-md-12 heading text-center">
              <span class="icon-pentagon wow bounceIn">
                <i class="fa fa-suitcase"></i>
              </span>
              <h2 class="title2">
                Amazing Features
                <span class="title-desc">
                  A Quality Experience Team with 4 years experience
                </span>
              </h2>
            </div>
          </div>
          <div class="row">
            <div
              class="feature-box col-sm-4 wow fadeInDown"
              data-wow-delay=".5s"
            >
              <span class="feature-icon float-left">
                <i class="fa fa-heart-o"></i>
              </span>
              <div class="feature-content">
                <h3>Conversation Flow Builder</h3>
              </div>
            </div>

            <div
              class="feature-box col-sm-4 wow fadeInDown"
              data-wow-delay=".5s"
            >
              <span class="feature-icon float-left">
                <i class="fa fa-codepen"></i>
              </span>
              <div class="feature-content">
                <h3>Segmentation</h3>
              </div>
            </div>

            <div
              class="feature-box col-sm-4 wow fadeInDown"
              data-wow-delay=".5s"
            >
              <span class="feature-icon float-left">
                <i class="fa fa-film"></i>
              </span>
              <div class="feature-content">
                <h3>Campaigns</h3>
              </div>
            </div>
          </div>

          <div class="gap-40"></div>

          <div class="row">
            <div
              class="feature-box col-sm-4 wow fadeInDown"
              data-wow-delay=".5s"
            >
              <span class="feature-icon float-left">
                <i class="fa fa-newspaper-o"></i>
              </span>
              <div class="feature-content">
                <h3>CRM Integrations </h3>
              </div>
            </div>

            <div
              class="feature-box col-sm-4 wow fadeInDown"
              data-wow-delay=".5s"
            >
              <span class="feature-icon float-left">
                <i class="fa fa-desktop"></i>
              </span>
              <div class="feature-content">
                <h3>Omni Channe</h3>
              </div>
            </div>

            <div
              class="feature-box col-sm-4 wow fadeInDown"
              data-wow-delay=".5s"
            >
              <span class="feature-icon float-left">
                <i class="fa fa-pagelines"></i>
              </span>
              <div class="feature-content">
                <h3>Natural Language Processing </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="about">
        <div class="container">
          <div class="row">
            <div class="col-md-12 heading text-center">
              <span class="icon-pentagon wow bounceIn">
                <i class="fa fa-meh-o"></i>
              </span>
              <h2 class="title2">
                Benefits
                <span class="title-desc">
                  A Quality Experience Team with 4 years experience
                </span>
              </h2>
            </div>
          </div>
          <div class="row featured-tab">
            <div class="col-md-3 col-sm-5">
              <div
                class="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  class="animated fadeIn nav-link mb-1 active d-flex align-items-center"
                  data-toggle="pill"
                  href="#tab_1"
                  role="tab"
                  aria-selected="true"
                >
                  <i class="fa fa-info-circle mr-4 h3 mb-0"></i>
                  <span class="h4 mb-0 font-weight-bold">Retail Banking</span>
                </a>
                <a
                  class="animated fadeIn nav-link mb-1 d-flex align-items-center"
                  data-toggle="pill"
                  href="#tab_2"
                  role="tab"
                  aria-selected="true"
                >
                  <i class="fa fa-android mr-4 h3 mb-0"></i>
                  <span class="h4 mb-0 font-weight-bold">
                    Wealth Management
                  </span>
                </a>
                <a
                  class="animated fadeIn nav-link mb-1 d-flex align-items-center"
                  data-toggle="pill"
                  href="#tab_3"
                  role="tab"
                  aria-selected="true"
                >
                  <i class="fa fa-android mr-4 h3 mb-0"></i>
                  <span class="h4 mb-0 font-weight-bold">
                    Payments & Transfers
                  </span>
                </a>
                <a
                  class="animated fadeIn nav-link mb-1 d-flex align-items-center"
                  data-toggle="pill"
                  href="#tab_4"
                  role="tab"
                  aria-selected="true"
                >
                  <i class="fa fa-pagelines mr-4 h3 mb-0"></i>
                  <span class="h4 mb-0 font-weight-bold">
                    Payments & Transfers
                  </span>
                </a>
                <a
                  class="animated fadeIn nav-link mb-1 d-flex align-items-center"
                  data-toggle="pill"
                  href="#tab_5"
                  role="tab"
                  aria-selected="true"
                >
                  <i class="fa fa-support mr-4 h3 mb-0"></i>
                  <span class="h4 mb-0 font-weight-bold">Insurance</span>
                </a>
              </div>
            </div>
            <div class="col-md-9 col-sm-7">
              <div class="tab-content" id="v-pills-tabContent">
                <div
                  class="tab-pane pl-sm-5 active fade animated fadeInLeft"
                  id="tab_1"
                  role="tabpanel"
                >
                  <h3>Benefits of Retail Banking</h3>
                  <ul class="check-list">
                    <li>
                      <i class="fa fa-check"></i> Account Registration
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Report Loss of cards
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Reset Passwords
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Apply for new Services
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Close existing Services
                    </li>
                  </ul>
                </div>
                <div
                  class="tab-pane pl-sm-5 fade animated fadeInLeft"
                  id="tab_2"
                  role="tabpanel"
                >
                  <h3>Benefits of Wealth Management</h3>
                  <ul class="check-list">
                    <li>
                      <i class="fa fa-check"></i> Mutual Fund and Equity
                      Transactions
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Monitor Portfolio
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Modify Portfolio
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Query for Risk Assessment
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Search for Market Trends
                    </li>
                  </ul>
                </div>

                <div
                  class="tab-pane pl-sm-5 fade animated fadeInLeft"
                  id="tab_3"
                  role="tabpanel"
                >
                  <h3>Benefits of Payments & Transfers</h3>
                  <ul class="check-list">
                    <li>
                      <i class="fa fa-check"></i> Transfer money
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Add/modify payee
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Add new user account
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Realtime information based on
                      markets
                    </li>
                  </ul>
                </div>
                <div
                  class="tab-pane pl-sm-5 fade animated fadeInLeft"
                  id="tab_4"
                  role="tabpanel"
                >
                  <h3>Marketing Benefits</h3>
                  <ul class="check-list">
                    <li>
                      <i class="fa fa-check"></i> Product Notifications
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Communicate Deals & Offers{" "}
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Lead Generation
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Lead Qualification
                    </li>
                  </ul>
                </div>
                <div
                  class="tab-pane pl-sm-5 fade animated fadeInLeft"
                  id="tab_5"
                  role="tabpanel"
                >
                  <h3>Insurance Benefits</h3>
                  <ul class="check-list">
                    <li>
                      <i class="fa fa-check"></i> Generate Quotes
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Lead Generation
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Submit Claims
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Claim Tracking
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Buy Insurance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="gap-40"></div>

      <section id="portfolio" class="portfolio portfolio-box">
        <div class="container">
          <div class="row">
            <div class="col-md-12 heading text-center">
              <span class="icon-pentagon wow bounceIn">
                <i class="fa fa-suitcase"></i>
              </span>
              <h2 class="title2">
                Templates
                <span class="title-desc">
                  A Quality Experience Team with 4 years experience
                </span>
              </h2>
            </div>
          </div>

          <div id="isotope" class="row isotope">
            <div class="col-sm-3 web-design isotope-item">
              <div class="grid">
                <figure class="m-0 effect-oscar">
                  <img src={portfolio1} alt=""></img>
                  <figcaption>
                    <h3>Healthcare</h3>
                    <a class="link icon-pentagon" href="portfolio-item.html">
                      <i class="fa fa-link"></i>
                    </a>
                    <a
                      class="view icon-pentagon"
                      data-rel="prettyPhoto"
                      href={portfoliobg1}
                    >
                      <i class="fa fa-search"></i>
                    </a>
                  </figcaption>
                </figure>
              </div>
            </div>

            <div class="col-sm-3 development isotope-item">
              <div class="grid">
                <figure class="m-0 effect-oscar">
                  <img src={portfolio2} alt=""></img>
                  <figcaption>
                    <h3>Salon Scheduler</h3>
                    <a class="link icon-pentagon" href="portfolio-item.html">
                      <i class="fa fa-link"></i>
                    </a>
                    <a
                      class="view icon-pentagon"
                      data-rel="prettyPhoto"
                      href={portfoliobg2}
                    >
                      <i class="fa fa-search"></i>
                    </a>
                  </figcaption>
                </figure>
              </div>
            </div>

            <div class="col-sm-3 joomla isotope-item">
              <div class="grid">
                <figure class="m-0 effect-oscar">
                  <img src={portfolio3} alt=""></img>
                  <figcaption>
                    <h3>Weight Loss</h3>
                    <a class="link icon-pentagon" href="portfolio-item.html">
                      <i class="fa fa-link"></i>
                    </a>
                    <a
                      class="view icon-pentagon"
                      data-rel="prettyPhoto"
                      href={portfoliobg3}
                    >
                      <i class="fa fa-search"></i>
                    </a>
                  </figcaption>
                </figure>
              </div>
            </div>

            <div class="col-sm-3 wordpress isotope-item">
              <div class="grid">
                <figure class="m-0 effect-oscar">
                  <img src={portfolio4} alt=""></img>
                  <figcaption>
                    <h3>Plastic Surgery</h3>
                    <a class="link icon-pentagon" href="portfolio-item.html">
                      <i class="fa fa-link"></i>
                    </a>
                    <a
                      class="view icon-pentagon"
                      data-rel="prettyPhoto"
                      href={portfoliobg3}
                    >
                      <i class="fa fa-search"></i>
                    </a>
                  </figcaption>
                </figure>
              </div>
            </div>

            <div class="col-sm-3 joomla isotope-item">
              <div class="grid">
                <figure class="m-0 effect-oscar">
                  <img src={portfolio5} alt=""></img>
                  <figcaption>
                    <h3>Tele Health</h3>
                    <a class="link icon-pentagon" href="portfolio-item.html">
                      <i class="fa fa-link"></i>
                    </a>
                    <a
                      class="view icon-pentagon"
                      data-rel="prettyPhoto"
                      href={portfoliobg1}
                    >
                      <i class="fa fa-search"></i>
                    </a>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="col-sm-3 joomla isotope-item">
              <div class="grid">
                <figure class="m-0 effect-oscar">
                  <img src={portfolio5} alt=""></img>
                  <figcaption>
                    <h3>Tele Health</h3>
                    <a class="link icon-pentagon" href="portfolio-item.html">
                      <i class="fa fa-link"></i>
                    </a>
                    <a
                      class="view icon-pentagon"
                      data-rel="prettyPhoto"
                      href={portfoliobg1}
                    >
                      <i class="fa fa-search"></i>
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

export default SalesMarketing;
