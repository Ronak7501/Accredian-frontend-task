import React from 'react'

const TableSection = () => {

    const leftTableData = ["PRODUCT MANAGEMENT", "STRATEGEY & LEADERSHIP", "BUSINESS MANAGEMENT","FINTECH","SENIOR MANAGEMENT","DATA SCIENCE", "DIGITAL TRANSFORMATION","BUSINESS ANALYTICS"];
    const rightTableData = [
    ["Professional Certificate Program in Product Management", "₹ 7,000", "₹ 9,000"],
    ["PG Certificate Program in Strategic Product Management", "₹ 9,000", "₹ 11,000"],
    ["Executive Program in Data Driven Product Management", "₹ 10,000", "₹ 10,000"],
    ["Executive Program in Product Management and Digital Transformation", "₹ 10,000", "₹ 10,000"],
    ["Executive Program in Product Management", "₹ 10,000", "₹ 10,000"],
    ["Advanced Certification in Product Management", "₹ 10,000", "₹ 10,000"],
    ["Executive Program in Product Management and Project Management", "₹ 10,000", "₹ 10,000"],
  ];

  return (
    <div>
      <h1 className="font-bold text-center mt-10 pt-5 text-2xl">
        What Are The <span className="text-blue-600 font-bold">Referral Benefits?</span>
      </h1>

      <div className="flex justify-center mt-10 p-8 rounded-lg">
        {/* Left Container */}
        <div className="w-[20%] mr-4 bg-white  rounded-lg shadow-xl">
          <table className="w-full">
            <thead>
              <tr>
                <th className="bg-blue-600 font-normal text-white p-3 text-start rounded-t-lg">All Programs</th>
              </tr>
            </thead>
            <tbody>
              {leftTableData.map((row, index) => (
                <tr key={index}>
                  <td className="underline p-3">{row}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Container */}
        <div className="w-[75%] flex ">
          <table className="w-full shadow-xl rounded-b-xl">
            <thead >
              <tr >
                <th className="text-start rounded-tl-xl bg-[#1A73E859] text-[#1350A0] p-3">Programs</th>
                <th className="text-start bg-[#1A73E859] text-[#1350A0] p-2">Referrer Bonus</th>
                <th className="text-start rounded-tr-xl bg-[#1A73E859] text-[#1350A0] p-2">Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              {rightTableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className={`border-b p-2 ${cellIndex !== 0 ? 'border-l' : ''}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Centered Button */}
      <div className="flex justify-center mt-8">
        <button className="flex w-[12%] bg-blue-600 text-white justify-center py-2 px-4 rounded mt-4">
          Refer Now
        </button>
      </div>
    </div>
    
    
  )
}

export default TableSection