import React,{useState} from 'react';
// import './Complexity.css'

export default function Complexity({name, worst, best, avg, space,algo}){
    return(
        <>
        <div className="details text-white flex flex-col justify-center items-center">
            <h1 className='text-[30px] mt-4 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black'>{name}</h1>
            <div className="flex justify-center items-center flex-col">
                <div className="flex space-x-5">
                    <h3 className=''>Time Complexity:</h3>
                    <div className="flex space-x-4">
                        <div>Worst Case: {worst} </div>
                        <div>Best Case: {best} </div>
                        <div>Average Case: {avg} </div>
                    </div>
                </div>
                <div className="">
                    <h3>Space Complexity: {space}</h3>
                </div>
            </div>
         </div>
        {/* <div className="details container text-white">
            <h1>{name}</h1>
            <div className="complexity row">
                <div className="comp col-xs-6">
                    <h3>Time Complexity</h3>
                    <div className="times">
                        <div>Worst Case : O{worst}  </div>
                        <div>Best Case : O{best}  </div>
                        <div>Average Case : O{avg}  </div>
                    </div>
                </div>
                <div className="comp col-xs-6">
                    <h3>Space Complexity:</h3>
                    <span>O({space})</span>
                </div>
            </div>
         </div> */}
       
        </>
    )
}