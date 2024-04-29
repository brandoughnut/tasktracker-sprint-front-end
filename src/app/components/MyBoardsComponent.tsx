'use client'

import React from 'react'
import plus from '@/assets/tasksprintplus.png';
import Image from 'next/image';

const MyBoardsComponent = () => {
  return (
    <div className='bg-white border-[1px] border-black rounded-[5px] h-[789px] w-[800px]'>
        <div className='flex justify-center'>
            <h1 className='HammersmithOne text-[60px]'>MY BOARDS</h1>
            <Image className='h-[35px] w-[35px] mt-[22px] ms-5' src={plus} alt='plus icon'/>
        </div>
    </div>
  )
}

export default MyBoardsComponent
