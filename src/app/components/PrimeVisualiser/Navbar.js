import React from "react";

const Navbar = ({
  handleChangeSpeed,
  handleValueIncrease,
  handleStartAlgo,
  handleRefresh,
  isRunning,
  setAlgo,
  number,
  speed
}) => {
  return (
    <>
      <div className="navbar w-[100vw] flex py-3  items-center justify-evenly shadow-2xl mb-4">
        <div className="text-white text-[25px] font-bold">
          Prime Number Finder
        </div>
        <div className="text-white flex items-center space-x-5">
          <div className="flex items-center space-x-1">
            <label htmlFor="speed">Set Speed</label>
            <input
              type="range"
              name=""
              id="speed"
              min="1"
              max="50"
              onChange={handleChangeSpeed}
              value={Math.ceil(400 / speed)}
              disabled={isRunning}
              className={`appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-[rgb(150,194,220)] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[rgb(69,149,215)]  ${isRunning?'cursor-not-allowed':'cursor-pointer'}`}
            />
          </div>
          <div className="flex items-center space-x-1">
            <label htmlFor="length">Set Cell Number</label>
            <input
              type="range"
              name=""
              id="length"
              min="5"
              max="1500"
              onChange={handleValueIncrease}
              value={number}
              disabled={isRunning}
              step="1"
              className={`appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-[rgb(150,194,220)] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[rgb(69,149,215)]  ${isRunning?'cursor-not-allowed':'cursor-pointer'}`}
            />
          </div>
          <select
            className={`px-2 border-b outline-none bg-transparent py-1  ${isRunning?'cursor-not-allowed':'cursor-pointer'}`}
            onChange={(e) => {
              // handleAlgo(e);
              // handleDetails(e);
            }}
            disabled={isRunning}
            // value={algo}
          >
            <option
              value="selectionSort"
              // onClick={selectionDetails}
              className="text-black"
            >
              Seive Of Eratosthenes
            </option>
            {/* <option value="bubbleSort" onClick={bubbleDetails} className="text-black">
                Bubble Sort
              </option>
              <option value="insertionSort" onClick={insertionDetails} className="text-black">
                Insertion Sort
              </option>
              <option value="mergeSort" onClick={insertionDetails} className="text-black">
                Merge Sort
              </option>
              <option value="quickSort" onClick={quickDetails} className="text-black">
                Quick Sort
              </option> */}
          </select>
        </div>
        <div className="flex space-x-2 justify-center items-center">
          <button
            onClick={handleRefresh}
            disabled={isRunning}
            className={`px-2 rounded-lg bg-[rgb(69,149,215)]  text-white py-0 border-double border-4 border-[rgb(150,194,220)] ${isRunning?'cursor-not-allowed':'cursor-pointer'}`}
          >
            Refresh
          </button>
          <button
            onClick={handleStartAlgo}
            disabled={isRunning}
            className={`px-2 rounded-lg bg-[rgb(69,149,215)]  text-white py-0 border-double border-4 border-[rgb(150,194,220)]  ${isRunning?'cursor-not-allowed':'cursor-pointer'}`}
          >
            Visualize
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
