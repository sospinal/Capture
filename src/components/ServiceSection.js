import React from "react";
import diaphragm from "../img/diaphragm.svg";
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animations";

import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor, sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor, sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor, sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor, sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="Camera" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
    @media all and (max-width: 1008px) {
      font-size: 3rem;
    }
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media all and (max-width: 1008px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  @media all and (max-width: 1300px) {
    flex-basis: 14rem;
    padding-right: 1rem;
  }
  @media all and (max-width: 450px) {
    flex-basis: 10rem;
    margin: 1.2rem;
    padding-right: 0;
  }

  @media all and (max-width: 380px) {
    flex-basis: 10rem;
  }

  p {
    margin: auto;
  }

  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }

    @media all and (max-width: 450px) {
      img {
        width: 28%;
      }
      h3 {
        margin-left: 1rem;
        padding: 0.8rem;
      }
    }
  }
`;

export default ServicesSection;
