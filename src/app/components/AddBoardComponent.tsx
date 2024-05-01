'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import X from '@/assets/Close.png'

interface IAddBoardComponent {
    setIsAddBoard : (isBoardAdded:boolean) => void
}

const AddBoardComponent = (props: IAddBoardComponent) => {

    const [warning, setWarning] = useState<string>('');
    const [boardCode, setBoardCode] = useState<string>('');
    const [nameBoard, setNameBoard] = useState<string>('');

    const joinBoard = () => {
        props.setIsAddBoard(false)
    }

    const createBoard = () => {
        props.setIsAddBoard(false)
    }

    const handleClickJoin = () => {
        if(boardCode.length == 0){
            setWarning('Please Enter a Board Code')
        }else if(boardCode.length < 6){
            setWarning('Board Code must contain 6 characters')
        }else{
            joinBoard();
            setWarning('')
        }
    }

    const handleClickCreate = () => {
        if(nameBoard.length == 0){
            setWarning('Please Enter a Name for your Board')
        }else{
            createBoard();
            setWarning('')
        }
    }

    const handleClickClose = () => {
        props.setIsAddBoard(false);
    }

    const handleChangeBoardCode = (e:React.ChangeEvent<HTMLInputElement>) => {
        let code = e.target.value;
        if(code.length < 7){
            setBoardCode(code);
        }
        if(code.length == 6){
            setWarning('')
        }
    }


  return (
    <div className=' bg-white border p-[50px] w-[1033px] h-[500px] rounded-md flex flex-row relative'>
        <Image onClick={handleClickClose} className=' absolute top-7 right-8 cursor-pointer' src={X} alt='X'/>
        <div className=' absolute bottom-5 right-0 left-0 text-center text-red'>{warning}</div>
        <div className=' flex flex-col items-center justify-center space-y-5 w-full mr-[50px]'>
            <div className=' font-HammersmithOne text-5xl text-center w-full'>Enter Code</div>
            <input onChange={(e)=>handleChangeBoardCode(e)} value={boardCode} className=' font-HoltwoodOneSC text-blue rounded-md border border-black text-4xl h-[72px] w-[400px] outline-none text-center  placeholder:font-HammersmithOne' type="text" placeholder='Board Code'/>
            <button onClick={handleClickJoin} className=' bg-darker-teal text-white font-HammersmithOne text-[28px] w-[170px] h-[64px] rounded-md pt-2'>JOIN</button>
        </div>
        <div className='border-l-black border-dashed border-l-2 h-full'></div>
        <div className=' flex flex-col items-center justify-center space-y-5 w-full ml-[50px]'>
            <div className=' font-HammersmithOne text-5xl text-center w-full'>Create New</div>
            <input onChange={(e)=>setNameBoard(e.target.value)} className=' font-HoltwoodOneSC text-blue rounded-md border border-black text-4xl h-[72px] w-[400px] outline-none text-center placeholder:font-HammersmithOne' type="text" placeholder='Name Board'/>
            <button onClick={handleClickCreate} className=' bg-darker-teal text-white font-HammersmithOne text-[28px] w-[170px] h-[64px] rounded-md pt-2'>CREATE</button>
        </div>
    </div>
  )
}

export default AddBoardComponent