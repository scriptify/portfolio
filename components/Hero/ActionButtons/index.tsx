import { motion, useTransform, useViewportScroll } from "framer-motion";
import React from "react";
import ActionBtn from "../../ActionBtn";

interface Props {}

const viewportHeight =
  typeof window !== "undefined" ? window.innerHeight : 1080;

const ActionButtons = ({}: Props) => {
  // const { scrollY } = useViewportScroll();
  // const paddingBottom = useTransform(
  //   scrollY,
  //   [0, viewportHeight],
  //   ["0em", "10em"]
  // );

  return (
    <motion.div
      // style={{ paddingBottom }}
      className="absolute bottom-8 md:bottom-1/4 w-full flex items-center justify-center flex-wrap"
    >
      <ActionBtn>Skills</ActionBtn>
      <ActionBtn>Projects</ActionBtn>
      <ActionBtn>About Me</ActionBtn>
      <ActionBtn>Hire Me</ActionBtn>
    </motion.div>
  );
};

export default ActionButtons;
