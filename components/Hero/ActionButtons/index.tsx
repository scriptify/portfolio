import React from "react";
import ActionBtn from "../../ActionBtn";

interface Props {}

const ActionButtons = ({}: Props) => {
  return (
    <div className="absolute bottom-8 md:bottom-1/4 w-full flex items-center justify-center flex-wrap">
      <ActionBtn>Skills</ActionBtn>
      <ActionBtn>About Me</ActionBtn>
      <ActionBtn>Projects</ActionBtn>
      <ActionBtn>Hire Me</ActionBtn>
    </div>
  );
};

export default ActionButtons;
