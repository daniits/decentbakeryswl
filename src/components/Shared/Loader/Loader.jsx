import React from 'react'

const Loader = () => {
  return (
    // <div className="flex justify-center items-center h-screen bg-gray-100">
    //   <div className="flex justify-between items-center space-x-4 w-24">
    //     <div className="w-5 h-5 bg-[#fc7c7c] rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
    //     <div className="w-5 h-5 bg-[#2b4174] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
    //     <div className="w-5 h-5 bg-[#fc7c7c] rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
    //   </div>
    // </div>
    <div className="flex justify-center items-center h-full ">
    <div className="relative w-20 h-20 border-8 border-[#fc7c7c] border-t-[#2b4174] rounded-full animate-spin"></div>
  </div>
  )
}

export default Loader
