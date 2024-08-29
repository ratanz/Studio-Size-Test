"use client";

import React, { ReactNode, useState } from "react";

interface SocialLinkProps {
  name: string;
  videoSrc: string;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  index: number;
  totalLinks: number;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  name,
  videoSrc,
  isActive,
  onMouseEnter,
  onMouseLeave,
  index,
  totalLinks,
}) => {
  const isFirst = index === 0;
  const isLast = index === totalLinks - 1;

  const getVideoPosition = () => {
    if (isFirst) return "left-0";
    if (isLast) return "right-0";
    return "left-1/2 -translate-x-1/2";
  };

  return (
    <li
      className="video-content cursor-pointer relative w-full h-full "
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h1
        className={` transition-all duration-300 ease-in-out transform group-hover:text-white absolute  text-white flex justify-evenly w-full items-center 
          ${isActive ? "opacity-100 scale-110" : "opacity-50 scale-100"}`}
      >
        {name}
      </h1>

      {isActive && (
        <div
          className={`absolute top-10 w-[20vw] transition-all duration-500 ease-in-out`}
          style={{
            left: isFirst ? "20%" : isLast ? "-140%" : "50%",
            right: isLast ? "0" : "auto",
            transform: !isFirst && !isLast ? "translateX(-50%)" : "none",
          }}
        >
          <video
            src={videoSrc}
            loop
            playsInline
            muted
            autoPlay
            preload="metadata"
            className="shadow-lg object-cover w-full h-auto rounded-md "
          />
        </div>
      )}
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
      videoSrc:
        "https://studio-size.com/wp-content/uploads/2024/05/Behance.mp4",
    },
    {
      name: "Dribbble",
      videoSrc:
        "https://studio-size.com/wp-content/uploads/2024/05/Dribbble.mp4",
    },
    {
      name: "Vimeo",
      videoSrc: "https://studio-size.com/wp-content/uploads/2024/05/Vimeo.mp4",
    },
    {
      name: "Youtube",
      videoSrc:
        "https://studio-size.com/wp-content/uploads/2024/05/Youtube.mp4",
    },
    {
      name: "LinkedIn",
      videoSrc:
        "https://studio-size.com/wp-content/uploads/2024/05/Linkedin.mp4",
    },
    {
      name: "Savee.it",
      videoSrc:
        "https://studio-size.com/wp-content/uploads/2024/05/Saveeit.mp4",
    },
    {
      name: "Fonts in Use",
      videoSrc:
        "https://studio-size.com/wp-content/uploads/2024/05/Fonts-in-use.mp4",
    },
    {
      name: "Pinterest",
      videoSrc:
        "https://studio-size.com/wp-content/uploads/2024/05/Pinterest.mp4",
    },
  ];

  return (
    <div className="footer-content w-full relative h-[100vw] pt-40 bg-black p-14 ">
      <ul className="linkstext-white flex justify-between  text-2xl list-none gap-5 ">
        {socialLinks.map((link, index) => (
          <SocialLink
            key={link.name}
            name={link.name}
            videoSrc={link.videoSrc}
            isActive={activeLink === link.name}
            onMouseEnter={() => setActiveLink(link.name)}
            onMouseLeave={() => setActiveLink(null)}
            index={index}
            totalLinks={socialLinks.length}
          />
        ))}
      </ul>
    </div>
  );
};

export default Footer;
