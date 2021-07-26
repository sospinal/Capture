import React from "react";
import styled from "styled-components";
import { About, Hide } from "../styles";
import Toggle from "../components/Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animations";

const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <Hide>
      <Faq
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <h2>
          Any questions? <span>FAQ</span>
        </h2>
        <AnimateSharedLayout>
          <Toggle title="How do I start?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                possimus.
              </p>
            </div>
          </Toggle>
          <Toggle title="Daily schedule">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                possimus.
              </p>
            </div>
          </Toggle>
          <Toggle title="Different payment methods">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                possimus.
              </p>
            </div>
          </Toggle>
          <Toggle title="What prodcuts do you offer">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                possimus.
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
      </Faq>
    </Hide>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
