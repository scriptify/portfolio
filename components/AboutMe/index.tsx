import React from "react";
import Image from "next/image";
import TitleDivider from "../TitleDivider";

interface Props {}

const AboutMe = ({}: Props) => {
  return (
    <section className="mt-12">
      <TitleDivider size="w-1/12">
        <h2 id="about_me" className="text-4xl">
          About me
        </h2>
      </TitleDivider>
      <div className="p-4 font-secondary text-lg">
        <div className="h-36 w-full relative">
          <Image
            src="/me/pb.png"
            layout="fill"
            objectFit="contain"
            className="rounded-full"
          />
        </div>
        <p className="text-xl text-center p-4">
          I am a Full Stack Web Application Developer with{" "}
          {new Date().getFullYear() - 2016} years of professional experience.
        </p>
        <p className="mb-2">
          My passion for web development was ignited way earlier, selling my
          first website at an age of 14. Little did I know where all of that
          would lead!
        </p>
        <p className="mb-2">
          Today, it's my greatest passion to realize complete web app projects
          end-to-end using modern web technologies or just play around with the
          latest and greatest in tech.
        </p>
        <p className="mb-2">
          Currently I'm not available for new projects, but feel free to reach
          out. I always love to connect to new interesting people ♥
        </p>
        <p>
          <a
            className="underline text-blue-600"
            href="https://www.linkedin.com/in/maximilian-torggler/"
          >
            Let's connect on LinkedIn!
          </a>
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
