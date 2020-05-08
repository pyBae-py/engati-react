import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import bg1 from "./images/parallax/parallax3.jpg";
import bg2 from "./images/parallax/parallax2.jpg";
import bg3 from "./images/parallax/parallax1.jpg";
import "./css/presets/preset3.css";
import "./plugins/cd-hero/cd-hero.css";
import "./plugins/flex-slider/flexslider.css";
import "./plugins/owl/owl.theme.css";
import "./plugins/owl/owl.carousel.css";
import "./plugins/prettyPhoto.css";
import "./plugins/animate.css";
import "./plugins/fontawesome/font-awesome.min.css";
import "./plugins/bootstrap/bootstrap.min.css";
import "./CompStyle.css";
import "./css/style.css";
import testimonial1 from "./images/team/testimonial1.jpg";
import testimonial2 from "./images/team/testimonial2.jpg";
import testimonial3 from "./images/team/testimonial3.jpg";
const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="parallax-overlay"></div>
        <img className="d-block w-100" src={bg1} alt="First slide" />
        <Carousel.Caption>
          <div className="item">
            <div className="testimonial-thumb">
              <img src={testimonial1} alt="testimonial"></img>
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">
                Lorem Ipsum as their default model text, and a search for ‘lorem
                ipsum’ will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose. Lorem Ipsum is that it as
                opposed to using.
              </p>
              <h3 className="carousel-name">
                Sarah Arevik<span>Chief Executive</span>
              </h3>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={bg2} alt="First slide" />
        <Carousel.Caption>
          <div className="item">
            <div className="testimonial-thumb">
              <img src={testimonial2} alt="testimonial"></img>
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">
                Lorem Ipsum as their default model text, and a search for ‘lorem
                ipsum’ will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose. Lorem Ipsum is that it as
                opposed to using.
              </p>
              <h3 className="carousel-name">
                Narek Bedros<span>Sr. Manager</span>
              </h3>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={bg3} alt="First slide" />
        <Carousel.Caption>
          <div className="item">
            <div className="testimonial-thumb">
              <img src={testimonial3} alt="testimonial"></img>
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">
                Lorem Ipsum as their default model text, and a search for ‘lorem
                ipsum’ will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose. Lorem Ipsum is that it as
                opposed to using.
              </p>
              <h3 className="carousel-name">
                Taline Lucine<span>Sales Manager</span>
              </h3>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default TestimonialCarousel;
