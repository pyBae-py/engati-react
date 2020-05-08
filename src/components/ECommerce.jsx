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
const ECommerce = () => {
  return (
    <div className="ECommerce-wrapper">
      <div id="banner-area">
        <img src={banner1} alt="" />
        <div class="parallax-overlay"></div>

        <div class="banner-title-content">
          <div class="text-center">
            <h2>E Commerce Solutions</h2>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li class="breadcrumb-item text-white" aria-current="page">
                  ECommerce
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
              <h3>Chatbots for Ecommerce & Retail </h3>
              <p>
                "Learn how to build chatbots for Ecommerce & Retail use cases"
              </p>
              <p>
                <a
                  href="#"
                  class="btn btn-primary solid square"
                  id="ecom-style-1"
                >
                  Get Started Free<i class="fa fa-long-arrow-right"></i>
                </a>
              </p>
            </div>
            <div class="col-md-6 ts-padding about-img" id="ecom-style-2"></div>
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
                By 2023, over 70% of all chatbots accessed will be retail-based.
                And, annual ecommerce chatbot transactions will reach $112
                billion. Digital assistants are helping brands and organizations
                garner leads and increase conversions.{" "}
              </p>
              <p>
                Smart chatbots help with shopping and post-sales support. Beyond
                the customer engagement, they are helping in vendor management
                as well. Reactive commerce is insufficient to succeed. Ecommerce
                chatbots also help tap the market when the lead is hot and to
                convert cold ones with effective communication. Key capabilities
                include:{" "}
              </p>
              <ul class="check-list">
                <li>
                  <i class="fa fa-check"></i> Lead Generation & Nurturing
                </li>
                <li>
                  <i class="fa fa-check"></i> Product Search Guidance{" "}
                </li>
                <li>
                  <i class="fa fa-check"></i> Order Tracking Support{" "}
                </li>
                <li>
                  <i class="fa fa-check"></i> Conversational Commerce
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
                <h3>Natural Language Processing</h3>
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
                <h3>Bot Commerce & Cart Management </h3>
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
                <h3>Campaign Management </h3>
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
                <h3>Integration Hub </h3>
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
                <h3>Payments</h3>
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
                <h3>Live Chat </h3>
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
                <i class="fa fa-pagelines"></i>
              </span>
              <div class="feature-content">
                <h3>Omni Channel </h3>
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
                  <span class="h4 mb-0 font-weight-bold">
                    Business to Consumer
                  </span>
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
                    Business to Employee
                  </span>
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
                  <h3>Benefits of Business to Consumer</h3>
                  <ul class="check-list">
                    <li>
                      <i class="fa fa-check"></i> Customer Onboarding
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Product Search
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Order Tracking & Status
                      Inquiries
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Help and Support{" "}
                    </li>

                    <li>
                      <i class="fa fa-check"></i> Special Promotion Campaigns{" "}
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Live Chat Assistance{" "}
                    </li>
                  </ul>
                </div>
                <div
                  class="tab-pane pl-sm-5 fade animated fadeInLeft"
                  id="tab_2"
                  role="tabpanel"
                >
                  <h3>Benefits of Business to Employee</h3>
                  <ul class="check-list">
                    <li>
                      <i class="fa fa-check"></i> Easy Tracking of Tasks List
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Automated notification for new
                      Customers
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Lead Management
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Account Renewals
                    </li>
                    <li>
                      <i class="fa fa-check"></i> Automated Assignment of Leads
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
                    <h3>Product Browser</h3>
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
                    <h3>Fashion Store Chatbot</h3>
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
                    <h3>Skin Care</h3>
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
                    <h3>Food And Beverages</h3>
                    <a class="link icon-pentagon" href="portfolio-item.html">
                      <i class="fa fa-link"></i>
                    </a>
                    <a
                      class="view icon-pentagon"
                      data-rel="prettyPhoto"
                      href={portfolio4}
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
                    <h3>Pet Services Chatbot Template</h3>
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
                    <h3>Baby Clothing</h3>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default ECommerce;
