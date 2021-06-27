import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";

const AboutSection = () => {
  const tittleAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };
  const containerAnimation = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
        staggerChildren: 1,
        when: "afterChildren",
      },
    },
  };
  return (
    <About>
      <Description>
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Hide>
            <motion.h2 variants={tittleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={tittleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={tittleAnimation}>true.</motion.h2>
          </Hide>
          <p>
            Contact us for any photography or videography ideas that you have.
            We have professionals with mazing skills.
          </p>
          <button>Contact us</button>
        </motion.div>
        <Image>
          <img src={home1} alt="Guy with a camara" />
        </Image>
      </Description>
    </About>
  );
};

export default AboutSection;
