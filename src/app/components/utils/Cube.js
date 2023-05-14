import React from 'react'
import './Cube.css'

const Cube = () => {
  return (
    <>
        <div className="cube2-body">
            <div className="cube2">
                <div className="cube2-top"></div>
                <div>
                    <span style={{'--i':0}}></span>
                    <span style={{'--i':1}}></span>
                    <span style={{'--i':2}}></span>
                    <span style={{'--i':3}}></span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cube
