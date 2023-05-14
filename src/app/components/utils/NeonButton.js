import React from 'react'
import './NeonButton.css'

const NeonButton = ({text,height}) => {
  return (
    <>
    <div className={`neon-btn h-${height}`}>
      <button href='#' className=''>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {text}
      </button>
      </div>
    </>
  )
}

export default NeonButton
