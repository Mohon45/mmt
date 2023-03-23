import React from "react";
import eventPhoto1 from "../../../assets/img/event-photo1.png";

const Events = () => {
  return (
    <div className="bg-[#330523] px-14 py-14">
      <h1 className="text-white text-7xl font-bold mb-4">Insight</h1>
      <h1 className="text-white text-7xl font-bold mb-14">& Events</h1>
      <div>
        <h3 className="text-white text-xl font-bold">RECENT POSTS</h3>
        <div className="grid grid-cols-4 gap-4 my-8">
          <div className="card w-90 h-[500px] bg-base-100 shadow-xl cursor-pointer">
            <figure>
              <img src={eventPhoto1} className="w-[100]" alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="">
                <div className="badge border-none  bg-[#FF0044] text-lg px-8 py-4">
                  Tech
                </div>
                <div className="badge border-none  bg-[#FF0044] text-lg px-8 py-4 ml-4">
                  Business
                </div>
              </div>
              <h2 className="card-title text-[#330523] mt-4">
                Using Customer Data Platforms to Drive Data-Centric Customer
                Experience
              </h2>

              <div className="mt-10 text-2xl text-[#330523]">
                <h2>20/03/23</h2>
                <h2>MMT</h2>
              </div>
            </div>
          </div>
          <div className="card w-90 h-[500px] bg-base-100 shadow-xl cursor-pointer">
            <figure>
              <img src={eventPhoto1} className="w-[100]" alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="">
                <div className="badge border-none  bg-[#00FFFF] text-lg px-4 py-4">
                  Opinion
                </div>
                <div className="badge border-none  bg-[#FF0044] text-lg px-4 py-4 ml-4">
                  People
                </div>
                <div className="badge border-none  bg-[#FF0044] text-lg px-4 py-4 ml-4">
                  News
                </div>
              </div>
              <h2 className="card-title text-[#330523] mt-4">
                Using Customer Data Platforms to Drive Data-Centric Customer
                Experience
              </h2>

              <div className="mt-10 text-2xl text-[#330523]">
                <h2>20/03/23</h2>
                <h2>MMT</h2>
              </div>
            </div>
          </div>
          <div className="card w-90 h-[500px] bg-base-100 shadow-xl cursor-pointer">
            <figure>
              <img src={eventPhoto1} className="w-[100]" alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="">
                <div className="badge border-none  bg-[#00FFFF] text-lg px-4 py-4">
                  Know-How
                </div>
                <div className="badge border-none  bg-[#00FFFF] text-lg px-4 py-4 ml-2">
                  Opinion
                </div>
                <div className="badge border-none  bg-[#FF0044] text-lg px-4 py-4 ml-2">
                  Tech
                </div>
              </div>
              <h2 className="card-title text-[#330523] mt-4">
                Using Customer Data Platforms to Drive Data-Centric Customer
                Experience
              </h2>

              <div className="mt-10 text-2xl text-[#330523]">
                <h2>20/03/23</h2>
                <h2>MMT</h2>
              </div>
            </div>
          </div>
          <div className="card w-90 h-[500px] bg-base-100 shadow-xl cursor-pointer">
            <figure>
              <img src={eventPhoto1} className="w-[100]" alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="">
                <div className="badge border-none  bg-[#FF0044] text-lg px-8 py-4">
                  Know-How
                </div>
                <div className="badge border-none  bg-[#FF0044] text-lg px-8 py-4 ml-4">
                  Business
                </div>
              </div>
              <h2 className="card-title text-[#330523] mt-4">
                Using Customer Data Platforms to Drive Data-Centric Customer
                Experience
              </h2>

              <div className="mt-10 text-2xl text-[#330523]">
                <h2>20/03/23</h2>
                <h2>MMT</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
