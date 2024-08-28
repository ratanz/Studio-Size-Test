"use client";

import React, { ReactNode, useState } from "react";

interface SocialLinkProps {
  name: string;
  videoSrc: string;
  isActive : boolean,
  onMouseEnter : () => void
  onMouseLeave : () => void
}

const SocialLink: React.FC<SocialLinkProps> = ({
    name,
    videoSrc,
    onMouseEnter,
    onMouseLeave,

}) => {
  return (
    <li
      className="video-content cursor-pointer relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
        
      <div className=" absoulte mb-4">
      <span className="text-gray-500 hover:text-white transition-colors duration-300">
        {name}
      </span>
        <video
          width="300"
          height="250"
          src={videoSrc}
          loop
          playsInline
          muted
          autoPlay
          preload="metadata"
          className={`rounded-lg shadow-lg w-full object-cover h-full `}
        />
      </div>
    </li>
  );
};

interface SocialLinkData {
  name: string;
  videoSrc: string;
}

const Footer: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const socialLinks: SocialLinkData[] = [
    {
      name: "Instagram",
      videoSrc:
        "https://studio-size.com/wp-content/uploads/2024/05/Instagram.mp4",
    },
    {
        name: "Behance",
        videoSrc:"https://studio-size.com/wp-content/uploads/2024/05/Behance.mp4"
    },
    {
        name: "Dribbble",
        videoSrc:"https://studio-size.com/wp-content/uploads/2024/05/Dribbble.mp4"
    },
    {
        name: "Vimeo",
        videoSrc:"https://studio-size.com/wp-content/uploads/2024/05/Vimeo.mp4"
    },
    {
        name: "Youtube",
        videoSrc:"https://studio-size.com/wp-content/uploads/2024/05/Youtube.mp4"

    },
    {
        name: "LinkedIn",
        videoSrc:"https://studio-size.com/wp-content/uploads/2024/05/Linkedin.mp4"
    },
    {
        name: "Savee.it",
        videoSrc:"https://studio-size.com/wp-content/uploads/2024/05/Savee.it.mp4"
    },
    {
        name: "Fonts in Use",
        videoSrc:"https://studio-size.com/wp-content/uploads/2024/05/Fonts in Use.mp4"
    },
    {name: "Pinterest", videoSrc:"https://studio-size.com/wp-content/uploads/2024/05/Pinterest.mp4"}
  ];

  return (
    <div className="footer-content w-full h-[100vw] pt-40 bg-black p-14 ">
      <ul className="links text-white flex flex-row justify-between text-xl list-none gap-1">
        {socialLinks.map((link) => (
          <SocialLink
            key={link.name}
            name={link.name}
            videoSrc={link.videoSrc}
            isActive={activeLink === link.name}
            onMouseEnter={() => setActiveLink(link.name)}
            onMouseLeave={() => setActiveLink(null)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Footer;
