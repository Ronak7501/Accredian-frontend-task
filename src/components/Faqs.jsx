import React from 'react';
import card from '../assets/card.png'

const Faqs = () => {
  return (
    <div className="mt-20 p-8">
      <h1 className="font-bold text-center pt-5 text-2xl">
        Frequently Asked <span className="text-blue-600 font-bold">Questions</span>
      </h1>

      <div className="flex justify-between mt-32">
        <div className="w-1/2 pr-4 flex flex-col items-center">
        <button className="block w-[30%] h-14 mb-4 bg-white text-blue-600 font-bold shadow-gray-600 shadow-lg px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition">
            Eligibility
          </button>
          <button className="block w-[30%] mb-4 h-14 bg-white border border-black text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition">
            How To Use?
          </button>
          <button className="block w-[30%] mb-4 h-14 bg-white border border-black text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition">
            Terms & Conditions
          </button>
        </div>

        {/* Right Container */}
        <div className="w-1/2 flex flex-col items-start">
          
          <p className="mb-4 text-blue-600 font-semibold">Do I need to have prior Product Management and Project Management experience to enroll in the program?</p>
          <p className="mb-4 mt-4">No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
          suitable for individuals from any field of work.</p>
          <p className='mt-7 font-bold'>What is the minimum system configuration required?</p>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
    <div className="w-[80%] h-48 bg-blue-600 rounded-lg flex items-center p-4 pl-12">
      <div className="flex items-center">
        <img src={card} alt="Logo" className="w-12 h-12 mr-4" />
        <div className="text-white">
          <p className="font-semibold text-2xl">Want to delve deeper into the program?</p>
          <p>Share your details to receive expert insights from our program team!</p>
        </div>
      </div>
      <button className="ml-auto bg-white text-blue-600 font-semibold px-4 mr-10 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition">
        Get in touch
      </button>
    </div>
  </div>
    </div>
  );
};

export default Faqs;
