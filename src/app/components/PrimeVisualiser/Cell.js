import React from 'react'

const Cell = ({number, cell}) => {
    const getClass=()=>{
        const {val, ischecking, isVisiting, isPrime}=cell;
        if(isPrime){
            console.log('prime');
            return 'bg-green'
        }else if(isVisiting){
            console.log('visiting');
            return 'bg-yellow'
        }else if(ischecking){
            console.log('checking');
            return 'bg-gray-300'
        }else{
            return ''
        }
    }
  return (
    <>
      <div className={`border border-white rounded-lg justify-self-center my-1 text-white h-[40px] w-[40px] flex justify-center items-center ${cell.isPrime?'bg-green-600 animate-bounce duration-75':''} ${cell.isVisiting?'bg-yellow-300 h-[55px] w-[55px] animate-bounce':''} ${cell.isChecking?'bg-gray-400':''}`}>
        <span>{cell.val}</span>
      </div>
    </>
  )
}

export default Cell
