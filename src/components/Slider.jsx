// import React from 'react';

// const Slider = () => {
//   return (
//     <div className="flex justify-center py-8">
//       <div className="w-full max-w-4xl px-8">
//         <div className="bg-gray-200 rounded-full flex overflow-hidden">
//           <div className="flex items-center justify-between w-full">
//             <div className="flex-1 text-center py-2 cursor-pointer">Refer</div>
//             <div className="flex-1 text-center py-2">Benefits</div>
//             <div className="flex-1 text-center py-2">FAQs</div>
//             <div className="flex-1 text-center py-2">Support</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;

import React, { useState } from 'react';

const Slider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const items = ['Refer', 'Benefits', 'FAQs', 'Support'];

  return (
    <div className="flex justify-center py-8">
      <div className="w-full max-w-4xl px-8">
        <div className="bg-gray-200 rounded-full flex overflow-hidden">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex-1 text-center py-2 cursor-pointer relative ${
                selectedIndex === index ? 'text-blue-500' : 'text-gray-600'
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              {item}
              {selectedIndex === index && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 w-1 h-1 rounded-full mt-2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
