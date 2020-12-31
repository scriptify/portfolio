import React, { useEffect, useMemo, useState } from "react";
import classnames from "classnames";
import Image from "next/image";
import styles from "./index.module.css";
import { motion, useTransform, useViewportScroll } from "framer-motion";

interface Props {}

interface RoomElementProps {
  imgSrc: string;
  x: number;
  y: number;
  z: number;
}

const viewportHeight =
  typeof window !== "undefined" ? window.innerHeight : 1080;

const RoomElement: React.FC<RoomElementProps> = ({ imgSrc, x, y, z }) => {
  const { scrollY } = useViewportScroll();
  const [currScrollY, setScrollY] = useState<number>(0);

  const [{ marginTop, animDuration }] = useState({
    marginTop: Math.random() * 0.9 + 0.1 * (Math.random() > 0.5 ? 1 : -1),
    animDuration: Math.random() * 1.5 + 0.5,
  });
  const deviation = 15;
  useEffect(() => {
    scrollY.onChange((y) => {
      setScrollY(y);
    });
    return () => {
      scrollY.clearListeners();
    };
  }, [scrollY]);

  const currY = useTransform(
    scrollY,
    [0, viewportHeight],
    [y - deviation, y + deviation]
  );

  return (
    <motion.div
      className={styles["room-element"]}
      style={{ transform: `translate3d(${x}vw, ${currY.get()}vh, ${z}vh)` }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeIn",
        // type: "spring",
        // bounce: 0.2,
      }}
      animate={{
        marginTop: `${marginTop}em`,
        // marginLeft: `${marginLeftAnim}em`,
      }}
    >
      <Image src={imgSrc} layout="fill" objectFit="contain" priority />
    </motion.div>
  );
};

const Room3d = ({}: Props) => {
  return (
    <div className={classnames("absolute h-full w-full", styles["room-3d"])}>
      <div
        className={classnames(styles["room-face"], styles["left-face"])}
      ></div>
      <div
        className={classnames(styles["room-face"], styles["back-face"])}
      ></div>
      <div
        className={classnames(styles["room-face"], styles["right-face"])}
      ></div>

      <RoomElement imgSrc="/illustrations/Processor.png" x={60} y={5} z={-35} />
      <RoomElement
        imgSrc="/illustrations/Headphones.png"
        x={5}
        y={65}
        z={-25}
      />
      <RoomElement imgSrc="/illustrations/MacBook.png" x={78} y={55} z={-50} />
      <RoomElement imgSrc="/illustrations/iPad.png" x={5} y={5} z={-10} />
      <RoomElement imgSrc="/illustrations/Watch.png" x={60} y={90} z={-30} />
    </div>
  );
};

export default Room3d;
