const Page4 = () => {
  return (
    <>
      <div className="main bg-black w-full h-[55vw] p-14 font-[Satoshi]">
        <div className="text-content flex w-full flex-row]">
          <h1 className="text-white text-[5.4vw] font-bold tracking-[-0.3vw] leading-none ">
            Back to the simple, <br />
            intuitive, and inspiring
          </h1>
        </div>
        <div className="content flex p-10 h-[40vw] items-center justify-between">
          <div className="video w-[40vw]  p-10 flex items-center justify-center object-cover">
            <video
              autoPlay
              muted
              loop
              src="https://studio-size.com/wp-content/uploads/2024/06/size_clients_compressed.mp4"
            ></video>
          </div>
          <div className="text text-white flex mt-24 flex-col w-[46vw] px-10 justify-center">
            <h1 className="text-[1.7vw] font-bold">
              Big multinational companies or small local brands. Partner
              approach with one universal goal - to create authentic,
              functional, and beautiful design.
            </h1>
            <h1 className="mt-10 font-bold text-2xl flex items-center gap-10">
              Lets talk
              <button
                className="p-2 pl-3 pr-3  bg-[#252525cb] border-1 border-gray rounded-full text-white hover:bg-[#424242e7]
             transtion-all duration-300 ease-in-out"
              >
                <i className="ri-arrow-right-line"></i>
              </button>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page4;
