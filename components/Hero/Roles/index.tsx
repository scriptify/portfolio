import React, { useState } from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

interface Props {}

const roles = [
  "Full Stack Web Developer",
  "Freelancer & Consultant",
  "React Addict",
  "TypeScript Enthusiast",
  "Node.js Aficionado",
  "JavaScript Fanatic",
  "GraphQL-ster",
  "Serverless Advocate",
  "Browser APIs Connoisseur",
  "huge PWA fan",
  "friend of the Open Web",
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
