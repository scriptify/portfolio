import React from "react";
import classnames from "classnames";
import styles from "./index.module.css";

interface Props {}

const ActionBtn: React.FC<Props> = ({ children }) => {
  return (
    <button className="block px-6 py-2 text-white mr-2 mt-2 bg-black shadow-lg border border-white">
      {children}
    </button>
  );
};

export default ActionBtn;
