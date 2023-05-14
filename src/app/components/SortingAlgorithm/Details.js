import React from "react";
const Details = ({ algo }) => {
  return (
    <div className="flex justify-center items-center text-white space-x-20 mt-[20px]">
      <div className="flex space-x-1">
        <div className="bg-[#e80e44] border border-white h-5 w-5 items-center"></div>
        <div>Compare</div>
      </div>
      <div className="flex space-x-1">
        <div className="bg-[#e6ef30] border border-white h-5 w-5 items-center"></div>
        <div>
          {" "}
          {algo !== "mergeSort" ? "Swap" : "Taking From Auxillary Space"}
        </div>
      </div>
      <div className="flex space-x-1">
        <div className="bg-[#06c719] border border-white h-5 w-5 items-center"></div>
        <div>Sorted</div>
      </div>
    </div>
  );
};

export default Details;
