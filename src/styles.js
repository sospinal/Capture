import styled from "styled-components";
import { motion } from "framer-motion";

//Styled components
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media all and (max-width: 1008px) {
    display: block;
    padding: 2rem 3rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  font-weight: lighter;
  z-index: 2;
  @media all and (max-width: 1008px) {
    padding: 0;
    button {
      margin: 1rem 0rem 4rem;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    z-index: 2;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
