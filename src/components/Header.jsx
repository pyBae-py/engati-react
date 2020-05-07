import React from "react";
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
    <div className="Header-wrapper">
      <header id="header" className="fixed-top header2" role="banner">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="index.php">
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

            <div className="collapse navbar-collapse text-center" id="navigation">
              <ul className="navbar-nav ml-auto top-level-menu">
                <li className="nav-item  active">
                  <a
                    className="nav-link "
                    href="index.php"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    href="feature.php"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Features
                  </a>
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
                      <a className="dropdown-item" href="banking.php">
                        Banking & Finance
                      </a>
                      <a className="dropdown-item" href="healthcare.php">
                        Healthcare
                      </a>
                      <a className="dropdown-item" href="ecommerce.php">
                        E Commerce & Retail
                      </a>
                      <a className="dropdown-item" href="newsmedia.php">
                        News & Media
                      </a>
                      <a className="dropdown-item" href="automobiles.php">
                        Automobile
                      </a>
                      <a className="dropdown-item" href="realestate.php">
                        Real Estate
                      </a>
                      <a className="dropdown-item" href="education.php">
                        Education
                      </a>
                      <a className="dropdown-item" href="travel.php">
                        Travel
                      </a>
                      <a className="dropdown-item" href="telecom.php">
                        Telecom
                      </a>
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
                      <a className="dropdown-item" href="customersupport.php">
                        Customer Support
                      </a>
                      <a className="dropdown-item" href="salesmarketing.php">
                        Sales & Marketing
                      </a>
                      <a className="dropdown-item" href="servicemanagement.php">
                        Service Management
                      </a>
                      <a
                        className="dropdown-item"
                        href="conversationalcommerce.php"
                      >
                        Conversational <br></br> Commerce
                      </a>
                      <a className="dropdown-item" href="humanresources.php">
                        Human Resource
                      </a>
                      <a className="dropdown-item" href="transactionenquiries.php">
                        Transaction Enquiries
                      </a>
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
                      <a className="dropdown-item" href="blog.php">
                        Blogs
                      </a>
                    </div>
                  </li>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
