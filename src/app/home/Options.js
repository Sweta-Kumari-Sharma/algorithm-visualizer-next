import React from 'react'
import Link from 'next/link';
import NeonButton from '../components/utils/NeonButton'

const Options = () => {
  return (
    <>
      <div className='options flex flex-col justify-center items-center space-y-[50px]'>
        {/* <div className="flex space-x-[100px]"> */}
          <Link  href="/sorting-algorithm-visualizer" shallow>
            <NeonButton text='Visualise Sorting Algorithms'/>
          </Link>
          <Link href='/prime-algorithm-visualizer' shallow>
            <NeonButton text='Visualise Prime Number Algorithms'/>
          </Link>
        {/* </div> */}
        {/* <div className="flex space-x-[100px]"> */}
          {/* <Link to='/recursion'>
            <NeonButton text='Visualise Recursion Algorithms'/>
          </Link> */}
          <Link href='/backtracking-algorithm-visualizer' shallow>
            <NeonButton text='Visualise BackTracking Algorithms'/>
          </Link>
        {/* </div> */}
        <div className="flex space-x-[100px]">
        {/* <Link to='/sorting-game'>
          <NeonButton text='Play Sorting Games'/>
          </Link>
          <NeonButton text='Visualise Path Finding Algorithms'/> */}
          
        </div>
      </div>
    </>
  )
}

export default Options
