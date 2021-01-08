import React from "react";
import TitleDivider from "../TitleDivider";

interface Props {}

const HireMe = ({}: Props) => {
  return (
    <section className="mt-12">
      <TitleDivider size="w-1/12">
        <h2 id="hire_me" className="text-4xl">
          Hire me
        </h2>
      </TitleDivider>
      <div className="p-4 font-secondary text-lg">
        <p className="">
          Do you need a developer who can confidently implement projects
          end-to-end using modern web technologies?
        </p>
        <p className="font-bold">
          I can take ownership over whole projects or features and follow a
          clear application planning and execution concept.
        </p>
        <p className="text-xl text-center p-4">
          If that sounds like something you are interested in, drop me an email
          at{" "}
          <a
            className="underline text-blue-600"
            href="mailto:inquiries@maximilian-torggler.dev"
          >
            inquiries@maximilian-torggler.dev
          </a>{" "}
          and let's have a call!
        </p>
      </div>
    </section>
  );
};

export default HireMe;
