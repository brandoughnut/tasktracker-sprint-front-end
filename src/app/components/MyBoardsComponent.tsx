'use client'

import React from 'react'
import plus from '@/assets/tasksprintplus.png';
import Image from 'next/image';
import BoardCardComponent from './BoardCardComponent';

const MyBoardsComponent = () => {
  return (
    <div className='grid justify-end'>
        <div className='bg-white border-[1px] border-black rounded-[5px] h-[789px] w-[800px]'>
        <div className='flex justify-center mt-[41px]'>
            <h1 className='HammersmithOne text-[60px] h-[75px]'>MY BOARDS</h1>
            <Image className='h-[35px] w-[35px] mt-[23px] ms-6 cursor-pointer' src={plus} alt='plus icon'/>
        </div>
        <div className='mx-[63px] rounded-[5px] overflow-y-auto h-[74.5vh]'>
            <BoardCardComponent projectName='YOUR BOARD'/>
            <BoardCardComponent projectName='YOUR BOARD'/>
            <BoardCardComponent projectName='YOUR BOARD'/>
            <BoardCardComponent projectName='YOUR BOARD'/>
            <BoardCardComponent projectName='YOUR BOARD'/>
            <BoardCardComponent projectName='YOUR BOARD'/>
            <BoardCardComponent projectName='YOUR BOARD'/>
            <BoardCardComponent projectName='YOUR BOARD'/>
        </div>
    </div>
    </div>
    
  )
}

export default MyBoardsComponent
