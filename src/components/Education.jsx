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

const Education = () => {
  return (
    <div className="Education-wrapper">
      <div id="banner-area">
        <img src={banner1} alt=""></img>
        <div className="parallax-overlay"></div>

        <div className="banner-title-content">
          <div className="text-center">
            <h2>Education Solutions</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="index.php">Home</a>
                </li>
                <li className="breadcrumb-item text-white" aria-current="page">
                  Education
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
              <h3>Chatbots for Education </h3>
              <p>"Learn how to build chatbots for Educational use cases"</p>
              <p>
                <a
                  href="#"
                  className="btn btn-primary solid square"
                  id="edu-style-1"
                >
                  Get Started Free<i className="fa fa-long-arrow-right"></i>
                </a>
              </p>
            </div>

            <div
              className="col-md-6 ts-padding about-img"
              id="edu-style-2"
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
                How can you assist your new age students? An app requiring many
                clicks and navigations is not the answer. It is a generation
                that is fluent in conversation interface and smart educational
                chatbots can help.{" "}
              </p>
              <p>
                A Chatbot implementation is further more cost effective than an
                app. With further cost savings from automated support, chatbots
                are a clear option. Students & teachers, can use educational
                chatbots for getting notifications, taking surveys & completing
                assessments. Prospective students can have a lot of information
                on their fingertips. Overall capabilities include:{" "}
              </p>
              <ul className="check-list">
                <li>
                  <i className="fa fa-check"></i> Provide Course Structure, Fees
                  & other details{" "}
                </li>
                <li>
                  <i className="fa fa-check"></i> Automate & improve
                  subscription to online courses{" "}
                </li>
                <li>
                  <i className="fa fa-check"></i> Scorecards for Students &
                  teachers{" "}
                </li>
                <li>
                  <i className="fa fa-check"></i> Automate administrative tasks
                  for teachers & students{" "}
                </li>
                <li>
                  <i className="fa fa-check"></i> Training students with
                  personalisation{" "}
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
                <h3>Data Sources </h3>
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
                <h3>Broadcast Notifications </h3>
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
            <div className="col-md-4 col-sm-5">
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
                    Organization to Teachers
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
                    Organization to Students
                  </span>
                </a>
              </div>
            </div>
            <div className="col-md-8 col-sm-7">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane pl-sm-5 active fade animated fadeInLeft"
                  id="tab_1"
                  role="tabpanel"
                >
                  <h3>Benefits for Organization to Teachers</h3>
                  <ul className="check-list">
                    <li>
                      <i className="fa fa-check"></i> Share Lecture Schedules
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Update Course-related
                      Information
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Request Student Feedback
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Request Attendance Records
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Survey Feedback
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane pl-sm-5 fade animated fadeInLeft"
                  id="tab_2"
                  role="tabpanel"
                >
                  <h3>Benefits for Organization to Students</h3>
                  <ul className="check-list">
                    <li>
                      <i className="fa fa-check"></i> Assistance in Course
                      Selection
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Assistance with
                      Applications
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Pay Online Fees
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Get Student Feedback
                      Report
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Share Examination Updates
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
                    <h3>Education Course Selector</h3>
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
                    <h3>Education School</h3>
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
                    <h3>First Aid Knowledge</h3>
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
                    <h3>Career Guidance</h3>
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
                    <h3>Language Learning</h3>
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
            <div className="col-sm-3 wordpress isotope-item">
              <div className="grid">
                <figure className="m-0 effect-oscar">
                  <img src={portfolio4} alt=""></img>
                  <figcaption>
                    <h3>Driving School</h3>
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

export default Education;
