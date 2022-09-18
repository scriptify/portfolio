import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./index.module.css";

interface Props {}

const numImages = 5;

const Me = ({}: Props) => {
  const [currImg, setImg] = useState<number>(0);

  useEffect(() => {
    let didCancel = false;
    const interval = window.setInterval(() => {
      let nextIdx = currImg + 1;
      if (nextIdx >= numImages) {
        nextIdx = 0;
      }
      if (!didCancel) {
        setImg(nextIdx);
      }
    }, 1000);

    return () => {
      window.clearInterval(interval);
      didCancel = true;
    };
  }, [currImg]);

  return (
    <div className={styles["me"]}>
      <div className={styles["me-img-container"]}>
        <Image src={`/me/${currImg}.png`} layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Me;
