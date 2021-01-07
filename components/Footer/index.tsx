import React from "react";

interface Props {}

const Footer = ({}: Props) => {
  return (
    <footer className="bg-black sm:flex justify-between p-4 text-sm font-secondary text-gray-300">
      <p>
        © {new Date().getFullYear()} Maximilian Torggler. All Rights Reserved.
      </p>
      <p className="mt-4 sm:mt-0 text-center">
        <span className="italic">
          “Being Afraid Of Everything Means You Learn Nothing.”
        </span>{" "}
        - Michael Burnham
      </p>
    </footer>
  );
};

export default Footer;
