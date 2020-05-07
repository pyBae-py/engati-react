import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faCogs,
  faShoppingCart,
  faLightbulb,
  faSuitcase,
  faHeart,
  faFilm,
  faDesktop,
  faGripLines,
  faPenNib,
  faNewspaper,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

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

import bg2 from "./images/slider/bg2.jpg";
import bg3 from "./images/slider/bg3.jpg";
import bg_thumb1 from "./images/slider/bg-thumb1.png";
import bg_thumb2 from "./images/slider/bg-thumb2.png";
import comp1 from "./images/companies/comp1.jpg";
import comp2 from "./images/companies/comp2.png";
import comp3 from "./images/companies/comp3.png";
import comp4 from "./images/companies/comp4.png";
import comp5 from "./images/companies/comp5.png";
import comp6 from "./images/companies/comp6.png";
import comp7 from "./images/companies/comp7.png";
import comp8 from "./images/companies/comp8.png";
import comp9 from "./images/companies/comp9.png";
import comp10 from "./images/companies/comp10.png";
import comp11 from "./images/companies/comp11.png";
import comp12 from "./images/companies/comp12.png";

import client1 from "./images/clients/client1.png";
import client2 from "./images/clients/client2.png";
import client3 from "./images/clients/client3.png";
import client4 from "./images/clients/client4.png";
import client5 from "./images/clients/client5.png";
import client6 from "./images/clients/client6.png";
import client7 from "./images/clients/client7.png";
import client8 from "./images/clients/client8.png";

import testimonial1 from "./images/team/testimonial1.jpg";
import testimonial2 from "./images/team/testimonial2.jpg";
import testimonial3 from "./images/team/testimonial3.jpg";

const Middle = () => {
  return (
    <div className="Middle-wrapper">
      <section id="home" className="p-0">
        <div id="main-slide" className="cd-hero">
          <ul className="cd-hero-slider">
            <li className="selected">
              <div className="overlay2">
                <img className="" src={bg2} alt="slider"></img>
              </div>
              <div className="cd-half-width">
                <h2>How Big Can You Dream?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                  consequatur cumque natus!
                </p>
                <a href="#0" className="cd-btn btn btn-primary solid">
                  Take a Tour
                </a>
              </div>

              <div className="cd-half-width cd-img-container">
                <img src={bg_thumb1} alt=""></img>
              </div>
            </li>
            <li>
              <div className="overlay2">
                <img className="" src={bg3} alt="slider"></img>
              </div>
              <div className="cd-half-width cd-img-container img-right">
                <img src={bg_thumb2} alt="Background thumb 2"></img>
              </div>
              <div className="cd-half-width">
                <h2>Your Challenge is Our Progress</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                  consequatur cumque natus!
                </p>
                <a href="#0" className="cd-btn btn btn-primary white">
                  Start
                </a>
                <a href="#0" className="cd-btn btn secondary btn-primary solid">
                  Learn More
                </a>
              </div>
            </li>
          </ul>

          <div className="cd-slider-nav">
            <nav>
              <span className="cd-marker item-1"></span>
              <ul>
                <li>
                  <a href="#0">
                    <i className="fa fa-phone"></i>
                    Dream
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fa fa-android"></i>Tech
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section id="service" className="service angle">
        <div className="container">
          <div className="row">
            <div className="col-md-12 heading">
              <span className="title-icon float-left" id="cog-icon">
                <FontAwesomeIcon icon={faCogs} size="3x" />
              </span>
              <h2 className="title" id="first-heading">
                What Engati chatbot can do for you, Lets See!
              </h2>
            </div>
          </div>

          <div className="row">
            <div
              className="col-md-4 col-sm-3 wow fadeInDown"
              data-wow-delay=".5s"
            >
              <div className="service-content text-center">
                <span className="service-icon icon-pentagon">
                  <FontAwesomeIcon icon={faTachometerAlt} size="3x" />
                </span>

                <h3>Comprehensive Customer Support</h3>
                <p>
                  Create chatbots that cost-effectively streamline your customer
                  support process from automated replies to live chat agents
                </p>
              </div>
            </div>

            <div
              className="col-md-4 col-sm-3 wow fadeInDown"
              data-wow-delay=".8s"
            >
              <div className="service-content text-center">
                <span className="service-icon icon-pentagon">
                  <FontAwesomeIcon icon={faCogs} size="3x" />
                </span>
                <h3>Automated Sales & Marketing</h3>
                <p>
                  Create chatbots to offer an instant & interactive way for
                  customers to Interact with your brands, get 24x7
                  recommendations & complete transactions
                </p>
              </div>
            </div>

            <div
              className="col-md-4 col-sm-3 wow fadeInDown"
              data-wow-delay="1.1s"
            >
              <div className="service-content text-center">
                <span className="service-icon icon-pentagon">
                  <FontAwesomeIcon icon={faShoppingCart} size="3x" />
                </span>

                <h3>Intelligent Human Resources</h3>
                <p>
                  Embrace the future of people management with a chatbot that
                  automates hiring & on-boarding and offers instant responses to
                  employee queries{" "}
                </p>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-3 wow fadeInDown"
              data-wow-delay="1.4s"
            >
              <div className="service-content text-center">
                <span className="service-icon icon-pentagon">
                  <FontAwesomeIcon icon={faLightbulb} size="3x" />
                </span>
                <h3>Automated Transaction Enquiries</h3>
                <p>
                  Embrace the future of transaction reporting via conversational
                  AI and significantly reducing support calls & queries
                </p>
              </div>
            </div>

            <div
              className="col-md-4 col-sm-3 wow fadeInDown"
              data-wow-delay="1.4s"
            >
              <div className="service-content text-center">
                <span className="service-icon icon-pentagon">
                  <FontAwesomeIcon icon={faLightbulb} size="3x" />
                </span>
                <h3>Service Management (ITSM)</h3>
                <p>
                  Increase service level satisfaction for your internal
                  customers by providing a 24x7 bot to address IT service
                  support queries and a range of simple tasks
                </p>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-3 wow fadeInDown"
              data-wow-delay="1.4s"
            >
              <div className="service-content text-center">
                <span className="service-icon icon-pentagon">
                  <FontAwesomeIcon icon={faLightbulb} size="3x" />
                </span>
                <h3>Conversational Commerce</h3>
                <p>
                  Create chatbots that provide the best in new age
                  conversational commerce by helping with product search,
                  recommendations & payments
                </p>
              </div>
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
                Amazing Features that make us #1
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
                <h3>e.Sense Proprietary NLP</h3>
                <p>
                  Proprietary optimized machine learning based NLP with advanced
                  Intent & Entity Recognitions
                </p>
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
                <h3>Conversation Flow Builder</h3>
                <p>
                  Best in the business. Building conversation flows is now as
                  easy as drawing user journeys
                </p>
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
                <h3>Integrations</h3>
                <p>
                  Advanced Integration framework for JSON Rest APIs with many
                  OOB standard Integrations
                </p>
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
                <h3>Multipurpose Lingual</h3>
                <p>
                  Extensive support for building bots that can easily operate in
                  multiple languages
                </p>
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
                <h3>Omnichannel</h3>
                <p>
                  Build once and Deploy across 14+ channels including website,
                  mobile and social media
                </p>
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
                <h3>Bot Building & Solutions</h3>
                <p>
                  Customizations & Bot Building from our experts at a very
                  competitive 32$ per hour
                </p>
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
                <i class="fa fa-heart-o"></i>
              </span>
              <div class="feature-content">
                <h3>Deployment Models</h3>
                <p>
                  Flexible deployment models - Public Cloud, On Premise/Private
                  Cloud and even Hybrid
                </p>
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
                <h3>Bot Templates</h3>
                <p>
                  Extensive library of 150+ Bot Templates for accelerators
                  across a wide range of use cases
                </p>
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
                <h3>Live Chat</h3>
                <p>
                  Seamlessly transition from automated responses to agents
                  handling your customer queries
                </p>
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
                <h3>Broadcast & Campaigns</h3>
                <p>
                  Use Broadcast to build automated campaigns to reach out to
                  your prospects & keep them engaged
                </p>
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
                <h3>Voice Bots</h3>
                <p>
                  Leverage the power of conversations with voice. The future of
                  conversation technology is here today on Engati
                </p>
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
                <h3>Mobile SDKs</h3>
                <p>
                  Enhance your mobile app reach with the extension of
                  conversational intelligence using Engati’s Mobile SDKs for iOS
                  & Android
                </p>
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
                <h3>Rich Analytics</h3>
                <p>
                  Have access to a rich bot analytics framework with information
                  on most frequently asked questions, actions, cohort analysis
                  and more
                </p>
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
                <h3>Intent & Entities</h3>
                <p>
                  Use Engati’s enhanced Intent & Entity recognition for a
                  variety of standard intents from date, location, time & more
                  to custom entity support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team">
        <div className="container">
          <div className="row">
            <div className="col-md-12 heading" id="comp-heading">
              <span className="title-icon float-left" id="bot-icon">
                <FontAwesomeIcon icon={faRobot} size="2x" />
              </span>

              <h2 className="title">Some Companies with our bots </h2>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-2 col-sm-6">
              <div className="team wow slideInLeft">
                <div>
                  <img src={comp1} alt=""></img>
                  <span className="img-top"></span>
                  <span className="img-bottom"></span>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className="team wow slideInLeft">
                <div>
                  <img src={comp2} alt=""></img>
                  <span className="img-top"></span>
                  <span className="img-bottom"></span>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className="team wow slideInLeft">
                <div>
                  <img src={comp3} alt=""></img>
                  <span className="img-top"></span>
                  <span className="img-bottom"></span>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className="team wow slideInLeft">
                <div>
                  <img src={comp4} alt=""></img>
                  <span className="img-top"></span>
                  <span className="img-bottom"></span>
                </div>
              </div>
            </div>

            <div className="col-md-2 col-sm-6">
              <div className="team wow slideInLeft">
                <div>
                  <img src={comp5} alt=""></img>
                  <span className="img-top"></span>
                  <span className="img-bottom"></span>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className="team wow slideInLeft">
                <div>
                  <img src={comp6} alt=""></img>
                  <span className="img-top"></span>
                  <span className="img-bottom"></span>
                </div>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 mt-5">
              <div className="team wow slideInLeft">
                <div>
                  <img src={comp7} alt=""></img>
                  <span className="img-top"></span>
                  <span className="img-bottom"></span>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 mt-5">
              <div className="team wow slideInLeft">
                <div>
                  <img src={comp8} alt=""></img>
                  <span className="img-top"></span>
                  <span className="img-bottom"></span>
                </div>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 mt-5">
              <div className="team wow slideInLeft">
                <div>
                  <img src={comp9} alt=""></img>
                  <span className="img-top"></span>
                  <span className="img-bottom"></span>
                </div>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 mt-5">
              <div className="team wow slideInLeft">
                <div>
                  <img src={comp10} alt=""></img>
                  <span className="img-top"></span>
                  <span className="img-bottom"></span>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 mt-5">
              <div className="team wow slideInLeft">
                <div>
                  <img src={comp11} alt=""></img>
                  <span className="img-top"></span>
                  <span className="img-bottom"></span>
                </div>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 mt-5">
              <div className="team wow slideInLeft">
                <div>
                  <img src={comp12} alt=""></img>
                  <span className="img-top"></span>
                  <span className="img-bottom"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="clients" className="clients">
        <div className="container">
          <div className="row wow fadeInLeft">
            <div
              id="client-carousel"
              className="col-sm-12 owl-carousel owl-theme text-center client-carousel"
            >
              <figure className="m-0 item client_logo">
                <a href="#">
                  <img src={client1} alt="client"></img>
                </a>
              </figure>
              <figure className="m-0 item client_logo">
                <a href="#">
                  <img src={client2} alt="client"></img>
                </a>
              </figure>
              <figure className="m-0 item client_logo">
                <a href="#">
                  <img src={client3} alt="client"></img>
                </a>
              </figure>
              <figure className="m-0 item client_logo">
                <a href="#">
                  <img src={client4} alt="client"></img>
                </a>
              </figure>
              <figure className="m-0 item client_logo">
                <a href="#">
                  <img src={client5} alt="client"></img>
                </a>
              </figure>
              <figure className="m-0 item client_logo">
                <a href="#">
                  <img src={client6} alt="client"></img>
                </a>
              </figure>
              <figure className="m-0 item client_logo">
                <a href="#">
                  <img src={client7} alt="client"></img>
                </a>
              </figure>
              <figure className="m-0 item client_logo">
                <a href="#">
                  <img src={client8} alt="client"></img>
                </a>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial parallax parallax3">
        <div className="parallax-overlay"></div>
        <div className="container">
          <div className="row">
            <div
              id="testimonial-carousel"
              className="owl-carousel owl-theme text-center testimonial-slide"
            >
              <div className="item">
                <div className="testimonial-thumb">
                  <img src={testimonial1} alt="testimonial"></img>
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    Lorem Ipsum as their default model text, and a search for
                    ‘lorem ipsum’ will uncover many web sites still in their
                    infancy. Various versions have evolved over the years,
                    sometimes by accident, sometimes on purpose. Lorem Ipsum is
                    that it as opposed to using.
                  </p>
                  <h3 className="name">
                    Sarah Arevik<span>Chief Executive</span>
                  </h3>
                </div>
              </div>
              <h1>Hahah</h1>
              <div className="item">
                <div className="testimonial-thumb">
                  <img src={testimonial2} alt="testimonial"></img>
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    Lorem Ipsum as their default model text, and a search for
                    ‘lorem ipsum’ will uncover many web sites still in their
                    infancy. Various versions have evolved over the years,
                    sometimes by accident, sometimes on purpose. Lorem Ipsum is
                    that it as opposed to using.
                  </p>
                  <h3 className="name">
                    Narek Bedros<span>Sr. Manager</span>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-thumb">
                  <img src={testimonial3} alt="testimonial"></img>
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    Lorem Ipsum as their default model text, and a search for
                    ‘lorem ipsum’ will uncover many web sites still in their
                    infancy. Various versions have evolved over the years,
                    sometimes by accident, sometimes on purpose. Lorem Ipsum is
                    that it as opposed to using.
                  </p>
                  <h3 className="name">
                    Taline Lucine<span>Sales Manager</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Middle;
