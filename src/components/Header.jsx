import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./CompStyle.css";

import "./css/presets/preset3.css";
import "./plugins/cd-hero/cd-hero.css";
import "./plugins/flex-slider/flexslider.css";
import "./plugins/owl/owl.theme.css";
import "./plugins/owl/owl.carousel.css";
import "./plugins/prettyPhoto.css";
import "./plugins/animate.css";
import "./plugins/fontawesome/font-awesome.min.css";
import "./plugins/bootstrap/bootstrap.min.css";

const Header = () => {
  return (
    <Router forceRefresh="true">
      <div className="Header-wrapper">
        <header id="header" className="fixed-top header2" role="banner">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand" href="/">
                Engati Logo
              </a>
              <button
                className="navbar-toggler ml-auto border-0 rounded-0 text-white"
                type="button"
                data-toggle="collapse"
                data-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="fa fa-bars"></span>
              </button>

              <div
                className="collapse navbar-collapse text-center"
                id="navigation"
              >
                <ul className="navbar-nav ml-auto top-level-menu">
                  <li className="nav-item  active">
                    <a
                      className="nav-link "
                      href="/"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/features">
                      <a
                        className="nav-link "
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Features
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Industries
                      </a>
                      <div className="dropdown-menu">
                        <Link to="/banking">
                          <a className="dropdown-item">Banking & Finance</a>
                        </Link>
                        <Link to="/healthcare">
                          <a className="dropdown-item">Healthcare</a>
                        </Link>
                        <Link to="/ecommerce">
                          <a className="dropdown-item">E Commerce & Retail</a>
                        </Link>
                        <Link to="/news-media">
                          <a className="dropdown-item">News & Media</a>
                        </Link>
                        <Link to="/automobiles">
                          <a className="dropdown-item">Automobile</a>
                        </Link>
                        <Link to="/realestate">
                          <a className="dropdown-item">Real Estate</a>
                        </Link>
                        <Link to="/education">
                          <a className="dropdown-item">Education</a>
                        </Link>
                        <Link to="/travel">
                          <a className="dropdown-item">Travel</a>
                        </Link>
                        <Link to="/telecom">
                          <a className="dropdown-item">Telecom</a>
                        </Link>
                      </div>
                    </li>
                  </li>

                  <li className="nav-item dropdown">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Functions
                      </a>
                      <div className="dropdown-menu">
                        <Link to="/customer-support">
                          <a className="dropdown-item">Customer Support</a>
                        </Link>
                        <Link to="/salesmarketing">
                          <a className="dropdown-item">Sales & Marketing</a>
                        </Link>
                        <Link to="/servicemanagement">
                          <a className="dropdown-item">Service Management</a>
                        </Link>
                        <Link to="/conversationalcommerce">
                          <a className="dropdown-item">
                            Conversational <br></br> Commerce
                          </a>
                        </Link>
                        <Link to="/humanresources">
                          <a className="dropdown-item">Human Resource</a>
                        </Link>
                        <Link to="/transactionenquiry">
                          <a className="dropdown-item">Transaction Enquiries</a>
                        </Link>
                      </div>
                    </li>
                  </li>
                  <li className="nav-item dropdown">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Resources
                      </a>
                      <div className="dropdown-menu">
                        <Link to="/blog">
                          <a className="dropdown-item">Blogs</a>
                        </Link>
                      </div>
                    </li>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </Router>
  );
};

export default Header;
