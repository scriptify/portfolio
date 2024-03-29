import React from "react";

import Me from "./Me";
import Room3d from "./Room3d";
import { useViewportScroll, useTransform, motion } from "framer-motion";
import ActionButtons from "./ActionButtons";
import SocialLinks from "./SocialLinks";
import Roles from "./Roles";

interface Props {}

const viewportHeight =
  typeof window !== "undefined" ? window.innerHeight : 1080;

const Hero = ({}: Props) => {
  const { scrollY } = useViewportScroll();
  const marginTop = useTransform(scrollY, [0, viewportHeight], ["0em", "-2em"]);

  return (
    <header className="h-screen w-full relative bg-gray-900">
      <Room3d />
      <section className="text-center absolute top-28 w-full text-white">
        <motion.h2 style={{ marginTop }} className="text-xl md:text-2xl">
          Hello, my name is
        </motion.h2>
        <motion.h1
          className="text-6xl md:text-8xl font-bold"
          style={{ marginTop }}
        >
          Maximilian Torggler
        </motion.h1>
        <motion.h3
          style={{ marginTop }}
          className="text-2xl md:text-3xl pt-4 flex justify-center"
        >
          <div className="mr-2">I'm a</div> <Roles />
        </motion.h3>
      </section>
      <Me />
      <ActionButtons />
      <SocialLinks />
    </header>
  );
};

export default Hero;
