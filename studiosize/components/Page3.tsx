"use client";

import React, { useCallback, useRef, useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import Image from "next/image";
import "swiper/css/bundle";
import gsap from "gsap";

const Page3: React.FC = () => {
  
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (cursorRef.current) {
        const cursorWidth = cursorRef.current.offsetWidth;
        const cursorHeight = cursorRef.current.offsetHeight;
        gsap.to(cursorRef.current, {
          x: e.clientX - cursorWidth / 2,
          y: e.clientY - cursorHeight / 2,
          duration: 0.5,
          ease: "power2.out",
        });
      }

      if (isDragging && containerRef.current) {
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        containerRef.current.scrollLeft = scrollLeft - walk;
      }
    },
    [isDragging, startX, scrollLeft]
  );

  const handleMouseDown = useCallback((e: MouseEvent) => {
    if (containerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          opacity: 1,
          duration: 0.3,
          scale: 1,
        });
      }
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 1,
        duration: 0.3,
      });
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: 1,
        opacity : 1,
        duration: 0.3,
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!isDragging && cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: 0,
        duration: 0.3,
      });
    }
  }, [isDragging]);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.addEventListener("mousemove", handleMouseMove as EventListener);
      container.addEventListener("mousedown", handleMouseDown as EventListener);
      container.addEventListener("mouseup", handleMouseUp);
      container.addEventListener("mouseleave", handleMouseLeave);
      container.addEventListener("mouseenter", handleMouseEnter);
    }

    if (cursorRef.current) {
      gsap.set(cursorRef.current, { scale: 0, opacity: 1 });
    }

    return () => {
      if (container) {
        container.removeEventListener(
          "mousemove",
          handleMouseMove as EventListener
        );
        container.removeEventListener(
          "mousedown",
          handleMouseDown as EventListener
        );
        container.removeEventListener("mouseup", handleMouseUp);
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.removeEventListener("mouseenter", handleMouseEnter);
      }
    };
  }, [
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    handleMouseEnter,
    handleMouseLeave,
  ]);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="page-3 bg-black w-full h-[65vw] p-14 font-[Satoshi]">
      <div className="text-content flex justify-between items-center w-full ]">
        <h1 className="text-white text-5xl font-bold ">Featured work</h1>
        <div className="buttons flex items-center justify-between w-fit gap-1 hover:bg ">
          <button className="p-3 px-5  border-2 border-[#1d1d1dec] rounded-full text-[#ffffff]  relative overflow-hidden group">
            <span className="relative z-10">View all</span>
            <span className="absolute inset-0 z-0 bg-transparent group-hover:bg-[#252525e3] transition-colors duration-300 ease-[cubic-bezier(0.51,0.01,0.2,1)]" />
            <span
              className="absolute inset-0 z-0 bg-[#252525e3] scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 ease-[cubic-bezier(0.51,0.01,0.2,1)]"
              style={{
                transformOrigin: "center",
              }}
            />
          </button>
          <button
            className="p-3 pl-4 pr-4 bg-[#252525e3] border-1 border-gray rounded-full text-white hover:bg-[#424242e7]
             transtion-all duration-300 ease-in-out"
          >
            <i className="ri-arrow-left-line"></i>
          </button>
          <button
            className="p-3 pl-4 pr-4 bg-[#252525e3] border-1 border-gray rounded-full text-white hover:bg-[#424242e7]
             transtion-all duration-300 ease-in-out"
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>

      <div className="content mt-10 relative">
        <div
          ref={containerRef}
          className="container flex gap-7 flex-nowrap overflow-auto overflow-y-hidden"
          style={{ cursor: isDragging ? "grabbing" : "pointer" }}
        >
          <div
            className="box w-[25vw] h-[31vw] bg-white rounded-[7px] relative overflow-hidden group flex-shrink-0"
            onMouseEnter={handleVideoMouseEnter}
            onMouseLeave={handleVideoMouseLeave}
          >
            <Image
              src="/assets/HotType.jpg"
              width={410}
              height={100}
              alt="imgae"
              className="transition-opacity duration-300 object-cover w-full h-full ease-in-out opacity-100 group-hover:opacity-0"
            />
            <video
              className="absolute top-0 left-0 w-full h-full z-0 object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
              muted
              loop
              autoPlay
              src="https://player.vimeo.com/progressive_redirect/playback/912967172/rendition/540p/file.mp4?loc=external&log_user=0&signature=cab2e2728c39f5caf72aa082ad1fce88bfbbe11f2875057fface207ab9bc9545"
            ></video>
          </div>

          <div
            className="box w-[25vw] h-[31vw] bg-white rounded-[7px] relative overflow-hidden group flex-shrink-0"
            onMouseEnter={handleVideoMouseEnter}
            onMouseLeave={handleVideoMouseLeave}
          >
            <Image
              src="/assets/alterscope.png"
              width={410}
              height={100}
              alt="imgae"
              className="transition-opacity duration-300 object-cover w-full h-full ease-in-out opacity-100 group-hover:opacity-0"
            />
            <video
              className="absolute top-0 left-0 w-full h-full z-0 object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
              muted
              loop
              autoPlay
              src="https://player.vimeo.com/progressive_redirect/playback/968641716/rendition/540p/file.mp4?loc=external&log_user=0&signature=60e18c3db2933fc8327f5f78c06b5e3287b950fc7d988492ecfa06c5c8b3dfc2"
            ></video>
          </div>

          <div
            className="box w-[25vw] h-[31vw] bg-white rounded-[7px] relative overflow-hidden group flex-shrink-0"
            onMouseEnter={handleVideoMouseEnter}
            onMouseLeave={handleVideoMouseLeave}
          >
            <Image
              src="https://studio-size.com/wp-content/uploads/2024/04/Determ_Featured-567x709.jpg"
              width={410}
              height={100}
              alt="imgae"
              className="transition-opacity duration-300 object-cover w-full h-full ease-in-out opacity-100 group-hover:opacity-0"
            />
            <video
              className="absolute top-0 left-0 w-full h-full z-0 object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
              muted
              loop
              autoPlay
              src="https://player.vimeo.com/progressive_redirect/playback/912967024/rendition/540p/file.mp4?loc=external&log_user=0&signature=9b206386649900f4c73acd6e193081224721ef5577f4e8ab9628e820238c270d"
            ></video>
          </div>

          <div
            className="box w-[25vw] h-[31vw] bg-white rounded-[7px] relative overflow-hidden group flex-shrink-0"
            onMouseEnter={handleVideoMouseEnter}
            onMouseLeave={handleVideoMouseLeave}
          >
            <Image
              src="https://studio-size.com/wp-content/uploads/2023/06/VK_Ikons_Cover_2-567x709.jpg"
              width={410}
              height={100}
              alt="imgae"
              className="transition-opacity duration-300 object-cover w-full h-full ease-in-out opacity-100 group-hover:opacity-0"
            />
            <video
              className="absolute top-0 left-0 w-full h-full z-0 object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
              muted
              loop
              autoPlay
              src="https://player.vimeo.com/progressive_redirect/playback/941107506/rendition/720p/file.mp4?loc=external&log_user=0&signature=5b350f4dd98331c48ba6d4341f564e42d5ee04be4a4aaf8eb71e6fda7dc962ce"
            ></video>
          </div>

          <div
            className="box w-[25vw] h-[31vw] bg-white rounded-[7px] relative overflow-hidden group flex-shrink-0"
            onMouseEnter={handleVideoMouseEnter}
            onMouseLeave={handleVideoMouseLeave}
          >
            <Image
              src="https://studio-size.com/wp-content/uploads/2024/04/Arsfutura_Featured-567x709.jpg"
              width={410}
              height={100}
              alt="imgae"
              className="transition-opacity duration-300 object-cover w-full h-full ease-in-out opacity-100 group-hover:opacity-0"
            />
            <video
              className="absolute top-0 left-0 w-full h-full z-0 object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
              muted
              loop
              autoPlay
              src="https://player.vimeo.com/progressive_redirect/playback/912966817/rendition/540p/file.mp4?loc=external&log_user=0&signature=8b6be2b56122ea980233f32e4dfdce2c7eedcf9b6e80249374b02c8879779ff4"
            ></video>
          </div>
        </div>

        <div ref={cursorRef} className="drag-cursor fixed top-0 left-0 w-[80px] h-[80px] rounded-full bg-[#f7f7f7f6] text-black flex items-center justify-center text-[15px] pointer-events-none z-50 tranlate-x-[-50%] translate-y-[-50%] opacity-0">
          Drag
        </div>
        
      </div>
    </div>
  );
};

export default Page3;
