import React from "react";

interface Props {
  /**
   * Tailwind classs size
   */
  size?: string;
}

const TitleDivider: React.FC<Props> = ({ children, size = "w-1/12" }) => {
  return (
    <div className="w-full flex justify-start items-center">
      <div className={`bg-black h-1 mr-2 mt-2 ${size}`} />
      <div>{children}</div>
    </div>
  );
};

export default TitleDivider;
