"use client"
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Cells from './Cells';

const Queen = () => {
    const [board, setBoard] = useState([]);
    const [number, setNumber] = useState(4);
    const [speed, setSpeed] = useState(500);
    const [isRunning, setIsRunning] = useState(false);

    const handleValueIncrease=(e)=>{
        setNumber(Number(e.target.value));
    }
    const handleChangeSpeed=(e)=>{
        setSpeed(Math.ceil(400/Number(e.target.value)));
    }
    const handleStopAlgo=()=>{
        setIsRunning(false);
    }
    const handleRefresh=()=>{
        const board=handleGetBoard(number);
        setBoard(board);
    }
    const handleGetCell=(row,col)=>{
        return {row,col,isPresent:false,isChecked:false,isAttacked:false,isCurrent:false};
    }
    const handleGetBoard=()=>{
        const rows=[];
        for(let i=0;i<number;i++){
            const cols=[];
            for(let j=0;j<number;j++){
                cols.push(handleGetCell(i,j));
            }
            rows.push(cols);
        }
        return rows;
    }
    const handleGetChecked=(board,row,col,N)=>{
        const newBoard=board.slice();
        let pos=true;
        for(let i=0;i<N;i++){
            if(newBoard[row][i].isPresent){
                newBoard[row][i]={...newBoard[row][i],isChecked:true};
                pos=false;
            }
            else{
                newBoard[row][i]={...newBoard[row][i],isChecked:true};
            }
        }
        for(let i=0;i<N;i++){
            if(newBoard[i][col].isPresent){
                newBoard[i][col]={...newBoard[i][col],isAttacked:true};
                pos=false;
            }
            else{
                newBoard[i][col]={...newBoard[i][col],isChecked:true};
            }
        }
        for(let i=row, j=col;i>=0 && j>=0; i--,j--){
            if(newBoard[i][j].isPresent){
                newBoard[i][j]={...newBoard[i][j],isAttacked:true};
                pos=false;
            }
            else{
                newBoard[i][j]={...newBoard[i][j],isChecked:true};
            }
        }
        for(let i=row,j=col;i<N && j>=0; i++,j--){
            if(newBoard[i][j].isPresent){
                newBoard[i][j]={...newBoard[i][j], isAttacked:true};
                pos=false;
            }
            else{
                newBoard[i][j]={...newBoard[i][j],isChecked:true};
            }
        }
        for(let i=row,j=col;i<N && j<N; i++,j++){
            if(newBoard[i][j].isPresent){
                newBoard[i][j]={...newBoard[i][j], isAttacked:true};
                pos=false;
            }
            else{
                newBoard[i][j]={...newBoard[i][j],isChecked:true};
            }
        }
        for(let i=row,j=col;i>=0 && j<N; i--,j++){
            if(newBoard[i][j].isPresent){
                newBoard[i][j]={...newBoard[i][j], isAttacked:true};
                pos=false;
            }
            else{
                newBoard[i][j]={...newBoard[i][j],isChecked:true};
            }
        }
        newBoard[row][col]={...newBoard[row][col],isPresent:true, isCurrent:true};

        return [newBoard,pos];
        
    }
    const handleSleep=(ms)=>{
        return new Promise(resolve=>setTimeout(resolve,ms));
    }
    const queenAlgo=async(board,col)=>{
        if(col>=number){
            return true;
        }
        let newBoard=board.slice();
        for(let i=0;i<number;i++){
            newBoard=turnOffAttack(newBoard,number);
            const result=handleGetChecked(newBoard,i,col,number);
            newBoard=result[0];
            setBoard(newBoard);
            await handleSleep(speed);
            if(result[1]){
                const res=await queenAlgo(newBoard,col+1);
                if(res===true){
                    return true;
                }
                newBoard[i][col]={...newBoard[i][col],isPresent:true,isCurrent:true};
                setBoard(newBoard);
                await handleSleep(speed);
                newBoard[i][col]={...newBoard[i][col],isPresent:false,isCurrent:false};
                setBoard(newBoard);
            }
            newBoard[i][col]={...newBoard[i][col],isPresent:false,isCurrent:false};
            newBoard=turnOffAttack(newBoard,number);
            setBoard(newBoard);
            await handleSleep(speed);
        }
        return false;
    }
    const turnOffAttack=()=>{
        const newBoard=board.slice();
        for(let i=0;i<number;i++){
            for(let j=0;j<number;j++){
                newBoard[i][j]={...newBoard[i][j], isChecked:false, isAttacked:false, isCurrent:false};
            }
        }
        return newBoard;
    }
    const handleStartAlgo=async()=>{
        setIsRunning(true);
        const newBoard=board.slice();
        await queenAlgo(newBoard,0);
        const newBoard2=turnOffAttack(board,number);
        setBoard(newBoard);
        setIsRunning(false)
    }
    useEffect(() => {
        const board=handleGetBoard(number);
        setBoard(board);
    }, [number])

  return (
    <>
      <div className="queen bg-blue-950 min-h-[100vh]">
        <Navbar handleChangeSpeed={handleChangeSpeed} speed={speed} handleValueIncrease={handleValueIncrease} number={number} isRunning={isRunning} handleStartAlgo={handleStartAlgo} handleStopAlgo={handleStopAlgo} handleRefresh={handleRefresh}/>
        <Cells board={board} number={number}/>
      </div>
    </>
  )
}

export default Queen
