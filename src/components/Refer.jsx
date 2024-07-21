import React from "react";
import refer from "../assets/refer.png";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";

const Refer = () => {
  return (
    // <div className='flex flex-col justify-center items-center mt-20 bg-[#EEF5FF] p-8 rounded-lg shadow-lg'>
    //     <h1 className=' font-bold text-center pt-3 text-2xl'>How Do I <span className='text-blue-600 font-bold'>Refer ?</span></h1>
    //     <img className = 'w-[65%] h-auto object-contain' src={refer} alt="" />
    //     <button className="flex w-[12%] bg-blue-600 text-white justify-center py-2 px-4 rounded mt-12">Refer Now</button>

    // </div>

    <div className="relative mt-20 bg-[#EEF5FF] p-8 rounded-lg flex flex-col items-center">
      <h1 className="font-bold text-center pt-5 text-2xl">
        How Do I <span className="text-blue-600 font-bold">Refer?</span>
      </h1>
      <div className="relative w-full flex justify-center">
        <img className="w-2/3" src={refer} alt="Background with Circles" />

        <div className="absolute top-[50%] left-[30%] w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
          <img
            className="object-contain w-full h-full"
            src={one}
            alt="Circle Image 1"
          />
        </div>

        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
          <img
            className="object-contain w-full h-full"
            src={two}
            alt="Circle Image 2"
          />
        </div>

        <div className="absolute top-[50%] right-[30%] w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
          <img
            className="object-contain w-full h-full"
            src={three}
            alt="Circle Image 3"
          />
        </div>
      </div>
      <button className="flex w-[12%] bg-blue-600 text-white justify-center py-2 px-4 rounded mt-12">
        Refer Now
      </button>
    </div>
  );
};

export default Refer;
