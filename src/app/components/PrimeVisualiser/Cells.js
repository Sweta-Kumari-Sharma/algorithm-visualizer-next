import React from 'react'
import Cell from './Cell'

const Cells = ({number, cells}) => {
  return (
    <>
      <div className="cells grid grid-cols-10 gap-4  mt-[45px] pb-[8px] ">
        {
            cells.map((cell,idx)=>{
                return(
                    <Cell key={idx} cell={cell}/>
                )
            })
        }
      </div>
    </>
  )
}

export default Cells
