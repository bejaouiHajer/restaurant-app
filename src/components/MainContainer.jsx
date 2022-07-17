import React from "react";
import Delivery from "../img/delivery.png";

const MainContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="py-2 flex-1 flex flex-col items-start justify-center md:items-center gap-6">
        <div className="flex items-center gap-2 justify-center rounded-full bg-orange-100 px-4  py-1">
          <p className="text-base text-orange-500 font-semibold">
            Bike delivery
          </p>
          <div className="w-6 h-6 drop-shadow-xl bg-white rounded-full overflow-hidden">
            <img
              src={Delivery}
              alt="delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 lg:text-[5rem] text-[3rem]">
            Your city
          </span>
        </p>
        <p className="text-base md:w-[80%] text-textColor text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eos
          doloremque laudantium placeat ullam consequatur nihil recusandae illo
          laborum eligendi impedit minus provident laboriosam. Molestiae nostrum
          tenetur consequatur nihil alias.
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto "
        >
          Order Now
        </button>
      </div>
      <div className="py-2 bg-blue-400 flex-1"></div>
    </div>
  );
};

export default MainContainer;
