import React from "react";
import logo2 from "../assets/logo2.png";
import fb from '../assets/fb.png'
import ln from '../assets/ln.png'
import yt from '../assets/yt.png'
import twit from '../assets/twit.png'
import insta from '../assets/insta.png'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#282828] text-white py-8">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <img src={logo2} alt="Logo" className="w-28 h-8" />
            </div>
            <button className="bg-[#007BFF] text-white px-4 mr-28 py-2 rounded-lg border border-white hover:bg-gray-200 hover:text-blue-600 transition">
              Schedule 1-on-1 Call Now
            </button>
          </div>

          <hr className="border-gray-500 mb-8" />

          <div className="flex justify-between mb-8">
            <div className="flex-1 px-4">
              <h3 className=" mb-2 text-xl font-light">Programs</h3>
              <ul className="mt-5 space-y-6 font-bold">
                <li>
                  <a href="#" className=" text-gray-300 hover:underline">
                    Data Science & AI
                  </a>
                </li>
                <li>
                  <a href="#" className=" text-gray-300 hover:underline">
                    Business Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className=" text-gray-300 hover:underline">
                    Digital Transformation
                  </a>
                </li>
                <li>
                  <a href="#" className=" text-gray-300 hover:underline">
                    Business Management
                  </a>
                </li>
                <li>
                  <a href="#" className=" text-gray-300 hover:underline">
                    Project Management
                  </a>
                </li>
                <li>
                  <a href="#" className=" text-gray-300 hover:underline">
                    Strategy & Leadership
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1 px-4">
              <h3 className=" mb-2 text-xl font-light">Contact Us</h3>
              <ul className="text-sm">
                <li>
                  <a href="#" className="text-gray-300 hover:underline">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium ad nemo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:underline">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium totam itaque rerum consequatur quia perferendis
                    laboriosam recusandae autem!
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:underline">
                    Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,
                    Sector 18, Gurugram, Haryana 122015
                  </a>
                </li>
                <li>
                  <p className="text-lg font-light">Why Accredian</p>
                  <p className="text-xl font-light text-gray-400">Follow Us</p>
                  <div className="flex space-x-4 mt-2">
                    <img src={fb} alt="Logo 1" className="w-6 h-6" />
                    <img src={ln} alt="Logo 2" className="w-6 h-6" />
                    <img src={twit} alt="Logo 3" className="w-6 h-6" />
                    <img src={insta} alt="Logo 4" className="w-6 h-6" />
                    <img src={yt} alt="Logo 5" className="w-6 h-5" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-1 px-4">
              <h3 className=" mb-2 text-xl font-light">Accredian</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:underline">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:underline">
                    Admission Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:underline">
                    Referral Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:underline">
                    Terms & Policies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:underline">
                    Master FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Line */}
          <div className="text-center">
            <p className="text-white mt-20">
              &copy; 2024 Accredian A Brand of FullStack Education Pvt Ltd. All
              Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
