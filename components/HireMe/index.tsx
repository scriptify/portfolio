import React from "react";
import TitleDivider from "../TitleDivider";

interface Props {}

const HireMe = ({}: Props) => {
  return (
    <section className="mt-12">
      <TitleDivider size="w-1/12">
        <h2 id="hire-me" className="text-4xl">
          Hire me
        </h2>
      </TitleDivider>
      <div className="p-4 font-secondary text-lg">
        <p className="text-xl text-center p-4">
          Drop me an email at{" "}
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
