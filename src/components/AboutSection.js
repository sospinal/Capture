import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
          <p>
            Contact us for any photography or videography ideas that you have.
            We have professionals with mazing skills.
          </p>
          <button>Contact us</button>
        </div>
        <Image>
          <img src={home1} alt="Guy with a camara" />
        </Image>
      </Description>
    </About>
  );
};

export default AboutSection;
