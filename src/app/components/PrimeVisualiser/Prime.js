"use client"
import React, { useState } from 'react'
import Navbar from './Navbar'
import { useEffect } from 'react';
import Cells from './Cells';

const Prime = () => {
    const [number, setNumber] = useState(100);
    const [speed, setSpeed] = useState(500);
    const [algo, setAlgo] = useState(0);
    const [maxPrime, setMaxPrime] = useState(0);
    const [cells, setCells] = useState([]);
    const [primes, setPrimes] = useState([]);
    const [isRunning, setIsRunning] = useState(false);

    // const handleChangeSpeed=(speed)=>{
    //     setSpeed(600-speed*10);
    // }
    const handleChangeSpeed=(e)=>{
        setSpeed(Math.ceil(400/Number(e.target.value)));
    }

    // const handleValueIncrease=(val)=>{
    //   setNumber(val);
    //   if(algo===0){
    //     setCells(getCells(val));
    //     setIsRunning(false);
    //   }
    // }
    const handleValueIncrease=(e)=>{
      setNumber(Number(e.target.value));
    }

    const handleRefresh=()=>{
      setCells(getCells(number));
      setIsRunning(false);
    }

    const handleGetNewCellPrimeToggled=(cells,pos)=>{
      const newCells=cells.slice();
      const cell=newCells[pos];
      const newCell={
        ...cell,
        isPrime:true
      }
      newCells[pos]=newCell;
      return newCells;
    }
    const handleGetNewVisitingToggled=(cells,pos)=>{
      const newCells=cells.slice();
      const cell=newCells[pos];
      const newCell={
        ...cell,
        isVisiting:!cell.isVisiting
      }
      newCells[pos]=newCell;
      return newCells;
    }
    const handleGetNewCheckToggled=(cells,pos)=>{
      const newCells=cells.slice();
      const cell=newCells[pos];
      const newCell={
        ...cell,
        isChecking:true
      }
      newCells[pos]=newCell;
      return newCells;
    }
    const handleSleep=(ms)=>{
      return new Promise(resolve=>{
        setTimeout(resolve,ms);
      })
    }
    const handleStartSeive=async()=>{
      setIsRunning(true);
      const prime=[];
      for(let i=0;i<=number;i++){
        prime.push(1);
      }
      prime[0]=0;
      prime[1]=0;
      let changedCells=cells;
      let prevCheck=-1;
      let count=0;
      for(let i=2; i<=number; i++){
        console.log('i loop');
        if(prime[i]===1){
          changedCells=handleGetNewCellPrimeToggled(changedCells,i-1);
          setCells(changedCells);
          await handleSleep(speed);
          count++;
          for(let j=i*i; j<number; j+=i){
            console.log('j loop');
            if(prevCheck!==-1){
              changedCells=handleGetNewVisitingToggled(changedCells,prevCheck);
            }
            prevCheck=j-1;
            changedCells=handleGetNewCheckToggled(changedCells,j-1);
            changedCells=handleGetNewVisitingToggled(changedCells,prevCheck);
            setCells(changedCells);
            await handleSleep(speed);
            count++;
            prime[j]=0;
          }
        }
      }
      changedCells=handleGetNewVisitingToggled(changedCells,prevCheck);
      setCells(changedCells);
      setIsRunning(false);
    }
    const handleStartAlgo=()=>{
      if(algo===0){
        handleStartSeive();
      }
    }
    const createCell=(val)=>{
      return {
        val,
        isChecking:false,
        isVisiting:false,
        isPrime:false
      };
    }
    const getCells=(rows)=>{
      const cells=[];
      for(let cell=1;cell<=rows;cell++){
        cells.push(createCell(cell));
      }
      return cells;
    }

    useEffect(() => {
      const cells=getCells(number);
      setCells(cells);
    }, [number])
  return (
    <>
      <div className='bg-blue-950 min-h-[100vh]'>
        <Navbar handleChangeSpeed={handleChangeSpeed} handleValueIncrease={handleValueIncrease} handleStartAlgo={handleStartAlgo} handleRefresh={handleRefresh} isRunning={isRunning} setAlgo={setAlgo} number={number} speed={speed}/>

        {
          algo===0 &&
          <Cells number={number} cells={cells}/>
        }
      </div>
    </>
  )
}

export default Prime
