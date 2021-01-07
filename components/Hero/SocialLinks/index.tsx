import React from "react";
import Image from "next/image";
import {
  SiGithub as GitHubIcon,
  SiDevDotTo as DevIcon,
  SiTwitter as TwitterIcon,
} from "react-icons/si";

interface Props {}

const socialLinks = [
  {
    href: "https://www.github.com/scriptify",
    icon: (
      <GitHubIcon
        size="100%"
        className="text-gray-500 hover:text-white transition-colors duration-100"
      />
    ),
  },
  {
    href: "https://dev.to/scriptify",
    icon: (
      <DevIcon
        size="100%"
        className="text-gray-500 hover:text-white transition-colors duration-100"
      />
    ),
  },
  // {
  //   href: "https://getmakerlog.com/@scriptifyjs",
  //   icon: "/makerlog.png",
  // },
  {
    href: "https://twitter.com/scriptifyjs",
    icon: (
      <TwitterIcon
        size="100%"
        className="text-gray-500 hover:text-white transition-colors duration-100"
      />
    ),
  },
];

const SocialLinks = ({}: Props) => {
  return (
    <div className="absolute bottom-16 md:bottom-24 w-full flex items-center justify-center flex-wrap">
      {socialLinks.map((social) => (
        <a
          href={social.href}
          target="_blank"
          key={social.href}
          className="h-8 w-8 relative mr-4"
          style={{ filter: "grayscale(1)" }}
        >
          {social.icon}
          {/* <Image src={social.icon} layout="fill" objectFit="contain" /> */}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
