import React, { useEffect } from 'react'
import Cell from './Cell'

const Cells = ({board,number}) => {
    useEffect(() => {
        // console.log('board');
        // console.log(board);
    }, [])
  return (
    <>
      <div className={`cells flex flex-col justify-center items-center mx-8 p-8`}>
        {
            board.map((row,rowIdx)=>{
                {/* console.log('row') */}
                console.log(row)
                return(
                    <div key={rowIdx} className={`cells flex`}>
                        {  
                            row.map((cell,cellIdx)=>{
                                {/* console.log('cell')
                                console.log(cell) */}
                                return (
                                    <div key={cellIdx} className={`w-[100px] flex flex-col`}>
                                        <Cell cell={cell} number={number}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })
        }
      </div>
    </>
  )
}

export default Cells
