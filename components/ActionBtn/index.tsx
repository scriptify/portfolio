import React from "react";
import classnames from "classnames";

interface Props {
  mode?: "normal" | "highlight";
}

const ActionBtn: React.FC<Props> = ({ children, mode = "normal" }) => {
  return (
    <button
      className={classnames(
        "block text-center bg-white hover:text-white hover:bg-black mr-1 sm:mr-2 mt-1 sm:mt-2 shadow-lg rounded-lg transition-colors duration-150",
        {
          "w-28 py-2": mode === "normal",
          "w-32 py-4": mode === "highlight",
        }
      )}
    >
      {children}
    </button>
  );
};

export default ActionBtn;
