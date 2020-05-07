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

const Travel = () => {
  return (
    <div className="Travel-wrapper">
      <div id="banner-area">
        <img src={banner1} alt="" />
        <div className="parallax-overlay"></div>

        <div className="banner-title-content">
          <div className="text-center">
            <h2>Travel Solutions</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="index.php">Home</a>
                </li>
                <li className="breadcrumb-item text-white" aria-current="page">
                  Travel
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
              <h3>Chatbots for Travel </h3>
              <p>
                "Learn how to build chatbots for Traveling & Tourism use cases"
              </p>
              <p>
                <a
                  href="#"
                  className="btn btn-primary solid square"
                  id="travel-style-1"
                >
                  Get Started Free<i className="fa fa-long-arrow-right"></i>
                </a>
              </p>
            </div>

            <div
              className="col-md-6 ts-padding about-img"
              id="travel-style-2"
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
                Majority of travellers today plan their travel online. App
                domain is competitive and provides little to no differentiation.
                Travel chatbots, provide an experience like a travel agent.{" "}
              </p>
              <p>
                Smart chatbots today can maintain context and easily answer &
                guide a user through their queries. A conversational flow also
                makes it easy to up-sell and cross-sell flights, tours or
                packages. Chatbots further help you provide 24x7 quality support
                to your clients. Automated bookings, cancellations or upgrades
                at speed will help improve customer satisfaction. You can also
                actively engage with your users with promotional campaigns and
                key notifications. Key capabilities that you can look to extend
                with a travel chatbot are:{" "}
              </p>
              <ul className="check-list">
                <li>
                  <i className="fa fa-check"></i> Hotel, Flights & Packages
                  search{" "}
                </li>
                <li>
                  <i className="fa fa-check"></i> Itinerary Planning guidance{" "}
                </li>
                <li>
                  <i className="fa fa-check"></i> Conversational Booking
                  Experience{" "}
                </li>
                <li>
                  <i className="fa fa-check"></i> Pre & Post Booking Support
                  Queries{" "}
                </li>
                <li>
                  <i className="fa fa-check"></i> Promotional Campaigns & Lead
                  Nurturing{" "}
                </li>
                <li>
                  <i className="fa fa-check"></i> Key Notifications{" "}
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
                <h3>MultiMedia Content </h3>
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
                <h3>Integration Hub</h3>
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
                <h3>Payments </h3>
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
                <h3>Conversation Flow Builder </h3>
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
                  <span className="h4 mb-0 font-weight-bold">B2B</span>
                </a>
                <a
                  className="animated fadeIn nav-link mb-1 d-flex align-items-center"
                  data-toggle="pill"
                  href="#tab_2"
                  role="tab"
                  aria-selected="true"
                >
                  <i className="fa fa-android mr-4 h3 mb-0"></i>
                  <span className="h4 mb-0 font-weight-bold">B2C</span>
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
                  <h3>Benefits for B2B</h3>
                  <ul className="check-list">
                    <li>
                      <i className="fa fa-check"></i> Address Partner Queries
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Partner Onboarding
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Roll out Promotions for
                      Partners
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Conduct User Surveys
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Send/receive Payments from
                      Partners
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane pl-sm-5 fade animated fadeInLeft"
                  id="tab_2"
                  role="tabpanel"
                >
                  <h3>Benefits for B2C</h3>
                  <ul className="check-list">
                    <li>
                      <i className="fa fa-check"></i> Explore Destinations &
                      Options
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Curate Travel Plans
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Pay for Packages
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Contact Customer Support
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Upload Travel Docs
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Download Receipts
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
                    <h3>Hotel Booking Chatbot</h3>
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
                    <h3>Trip Planner</h3>
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
                    <h3>Tourism</h3>
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
                    <h3>Airline</h3>
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
            <div className="col-sm-3 joomla isotope-item">
              <div className="grid">
                <figure className="m-0 effect-oscar">
                  <img src={portfolio5} alt=""></img>
                  <figcaption>
                    <h3>Airport Assisstant</h3>
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

export default Travel;
