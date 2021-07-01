import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
//Animations
import { titleAnim, fade, photoAnim } from "../animations";
//SVG
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
          <motion.p variants={fade}>
            Contact us for any photography or videography ideas that you have.
            We have professionals with mazing skills.
          </motion.p>
          <motion.button variants={fade}>Contact us</motion.button>
        </motion.div>
        <Image>
          <motion.img
            variants={photoAnim}
            src={home1}
            alt="Guy with a camara"
          />
        </Image>
        <Wave />
      </Description>
    </About>
  );
};

export default AboutSection;
