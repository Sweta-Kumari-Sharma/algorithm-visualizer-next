import React from "react";
export default function Navbar({
  generateArray,
  handleLength,
  handleSpeed,
  handleAlgo,
  handleSort,
  sorting,
  completed,
  len,
  speed,
  algo,
  bubbleDetails,
  selectionDetails,
  mergeDetails,
  quickDetails,
  insertionDetails,
  handleDetails,
}) {
  return (
    <>
      <div className="navbar w-[100vw] flex  items-center justify-evenly  shadow-[0px_22px_70px_4px_rgba(209, 227, 214,0.3)] border-b py-3" style={{}}>
        <div className="text-white text-[25px] font-bold">Sorting Visualizer</div>
        <div className="text-white flex items-center space-x-5">
        <div className="flex items-center space-x-1">
          <label htmlFor="speed">
            Set Speed</label>
            <input
              type="range"
              name=""
              id="speed"
              min="1"
              max="50"
              onChange={handleSpeed}
              value={Math.ceil(400 / speed)}
              disabled={sorting}
              className={`appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-[rgb(150,194,220)] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[rgb(69,149,215)] ${sorting?'cursor-not-allowed':'cursor-pointer'}`}
            />
          </div>
          <div className="flex items-center space-x-1">
          <label htmlFor="length">
            Set Size</label>
            <input
              type="range"
              name=""
              id="length"
              min="5"
              max="150"
              onChange={handleLength}
              value={len}
              disabled={sorting}
              step="1"
              className={`appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-[rgb(150,194,220)] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[rgb(69,149,215)] ${sorting?'cursor-not-allowed':'cursor-pointer'}`}
            />
          
          </div>
          <select
              className={`px-2 border-b outline-none bg-transparent py-1 ${sorting?'cursor-not-allowed':'cursor-pointer'}`}
              onChange={(e) => {
                handleAlgo(e);
                handleDetails(e);
              }}
              disabled={sorting}
              value={algo}
            >
              <option value="selectionSort" onClick={selectionDetails} className="text-black">
                Selection Sort
              </option>
              <option value="bubbleSort" onClick={bubbleDetails} className="text-black">
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
              </option>
            </select>
        </div>
        <div className="flex space-x-2 justify-center items-center">
          <button onClick={generateArray} disabled={sorting}className= {`px-2 rounded-lg bg-[rgb(69,149,215)]  text-white py-0 border-double border-4 border-[rgb(150,194,220)] ${sorting?'cursor-not-allowed':'cursor-pointer'}`}>Randomize</button>
          <button onClick={handleSort} disabled={sorting || completed} className={`px-2 rounded-lg bg-[rgb(69,149,215)]  text-white py-0 border-double border-4 border-[rgb(150,194,220)] ${sorting?'cursor-not-allowed':'cursor-pointer'}`}>Sort</button>
        </div>
      </div>
    </>
  );
}
