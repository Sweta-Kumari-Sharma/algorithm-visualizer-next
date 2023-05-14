import React from 'react'
import Image from 'next/image';
import queen from '../../Images/queen.jpg'

const Cell = ({cell, number}) => {
  let bg;
  if(cell.isAttacked){
    console.log('attacked');
    bg='bg-pink-700';
  }
  else if(cell.isCurrent){
    bg='bg-yellow-600'
  }
  else if(cell.isPresent){
    bg='bg-green-600';
  }
  else if(cell.isChecked){
    bg='bg-blue-600'
  }
  else if((cell.row+cell.col)%2 === 0){
    bg='bg-white';
  }
  else{
    bg='bg-slate-700';
  }
  return (
    <>
      <div className={`text-black bg-red ${bg} h-[100px] w-[100px]  rounded-lg  border-black border mx-1 justify-self-center flex justify-center items-center`}>
        {cell.isPresent && 
            <Image src={queen} alt="" height='30px' width='30px' className='h-[50px] w-[50px] rounded-[50%]'/>
        }
      </div>
    </>
  )
}

export default Cell
