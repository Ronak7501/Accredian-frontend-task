import React , {useState} from 'react';
import logo from '../assets/logo.png'; 
import cash from '../assets/cash.png';
import PopupModal from './PopupModel';


const HeroSection = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    
   

    <div className="flex justify-center items-center  px-4 overflow-hidden ">
      <div className="relative bg-[#EEF5FF] w-full max-w-[1000px] h-auto rounded-[29px] flex flex-col md:flex-row shadow-2xl">

      <img src={cash} alt="Top Left" className="absolute -top-5 left-0 w-24 h-24 object-contain transform rotate-90  " />
        <img src={cash} alt="Top Right" className="mr-5 absolute -top-10 right-0 w-28 h-28 object-contain transform rotate-180" />
        <img src={cash} alt="Around center" className="absolute top-30 right-80 w-28 h-28 object-contain transform rotate-300" />
        <img src={cash} alt="Around Right" className="absolute -bottom-60 right-96 transform -translate-y-1/2 w-64 h-64 object-contain" />
        
        <div className="flex-1 flex flex-col justify-center p-8 ">
          <h1 className="justify-start text-6xl font-bold mb-4">Let's Learn <br /> & Earn</h1>
          <h3 className="mt-10 text-2xl mb-8">Get a chance to win <br/>up-to <span className="text-3xl font-bold text-blue-600">Rs. 15,000</span></h3>
          <button className="flex w-[35%] bg-blue-600 text-white justify-center py-2 px-4 rounded mt-8" onClick={openModal}>Refer Now</button>
        </div>
        
        <div className="flex-1 flex items-center justify-center ">
          <img src={logo} alt="Hero" className="w-full h-auto object-contain overflow-hidden" />
        </div>
      </div>
      <PopupModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default HeroSection;
