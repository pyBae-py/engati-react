import React from "react";
import banner1 from "./images/banner/banner1.jpg";
const Features = () => {
  return (
    <div className="Features-wrapper">
      <div id="banner-area">
        <img src={banner1} alt="" />
        <div class="parallax-overlay"></div>
        <div class="banner-title-content">
          <div class="text-center">
            <h2>Features</h2>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li class="breadcrumb-item text-white" aria-current="page">
                  Features
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

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
    </div>
  );
};
export default Features;
