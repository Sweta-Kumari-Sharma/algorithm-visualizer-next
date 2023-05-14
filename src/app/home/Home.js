import React from 'react'
import Cube from '../components/utils/Cube'
import Options from './Options'

const Home = () => {
  return (
    <>
     <div className='home relative'>
        <div className='relative'>
            <Cube/>
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%]'>
            <Options/>
        </div>
    </div> 
    </>
  )
}

export default Home
