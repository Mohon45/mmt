import React from "react";

const KnowMore = () => {
  return (
    <div className="text-center py-40">
      <h1 className="text-6xl font-bold text-[#330523]">Want to know more?</h1>
      <h3 className="text-5xl font-semibold text-[#330523] my-8">
        Get in touch!
      </h3>
      <div className="w-[450px] mx-auto flex justify-around items-center  my-16">
        <div className="bg-[#00FFFF] text-xl w-[200px] text-center cursor-pointer  py-2 corner-style">
          <h3>Our Services</h3>
        </div>
        <h3 className=" text-xl hover:text-[#FF0044] cursor-pointer">
          Let's Chat
          <span className="text-[#FF0044] font-bold"> ></span>
        </h3>
      </div>
    </div>
  );
};

export default KnowMore;
