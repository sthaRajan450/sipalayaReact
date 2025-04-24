import React from "react";

const Certificate = () => {
  return (
    <div className="flex justify-center bg-gray-200 mx-30 my-7 ">
      <input className="p-5 bg-white m-3 w-[30%] rounded-2xl outline-0 text-[18px]" type="text" placeholder="Enter Certificate Code" />
      <button type="submit" className="bg-black text-white m-3 w-[10%] rounded-2xl cursor-pointer text-[18px]">Submit</button>
    </div>
  );
};

export default Certificate;
