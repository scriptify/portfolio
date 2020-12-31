import React from "react";
import Image from "next/image";
import styles from "./index.module.css";

interface Props {}

const Me = ({}: Props) => {
  return (
    <div className={styles["me"]}>
      <div className={styles["me-img-container"]}>
        <Image src="/illustrations/me1.png" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Me;
