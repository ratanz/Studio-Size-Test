import React from "react";

const Page7 = () => {
  return (
    <div className="container w-full h-[82vw] relative bg-black p-14 font-[Satoshi]">
      <div className="video-content w-full h-full relative ">
        <video
          className="rounded-[10px] w-full h-full"
          muted
          autoPlay
          loop
          src="https://studio-size.com/wp-content/uploads/2024/05/Studio-Size-%E2%80%94-Labs02.mp4"
        ></video>

        <div className="text flex absolute top-[53%] right-[-5%] w-full h-full z-10 flex-col ">
          <h1 className="text-white text-[5vw] font-bold leading-none">
            Size Labs - the place <br /> for all art platfroms
          </h1>
          <h1 className="text-white">Explore labs</h1>
        </div>
      </div>
    </div>
  );
};

export default Page7;
