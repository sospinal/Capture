import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  let tValue = 0.3;
  if (window.innerWidth <= 450) {
    tValue = 0.15;
  }

  const controls = useAnimation();
  const [element, view] = useInView({ threshold: tValue });

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return [element, controls];
};
