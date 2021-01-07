import React, { useState } from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

interface Props {}

const roles = [
  "Fullstack Web Developer",
  "React Addict",
  "TypeScript enthusiast",
  "Node.js aficionado",
  "JavaScript Fanatic",
  "GraphQL-ster",
  "Serverless Advocate",
  "Browser APIs connoisseur",
  "Actually likes CSS",
];

const Roles = (props: Props) => {
  const [currentRole, setRole] = useState<number>(0);

  if (currentRole === undefined) {
    return <></>;
  }

  return (
    <Typist
      onTypingDone={() => {
        let newRole = currentRole + 1;
        if (newRole >= roles.length) {
          newRole = 0;
        }
        setTimeout(() => {
          setRole(undefined);
          setRole(newRole);
        }, 1000);
      }}
    >
      {roles[currentRole]}
    </Typist>
  );
};

export default Roles;
