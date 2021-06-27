import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
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
