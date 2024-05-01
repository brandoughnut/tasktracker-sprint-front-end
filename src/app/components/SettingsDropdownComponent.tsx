'use client'

import Image from 'next/image'
import logout from '@/assets/logoutbtn.png';
import React from 'react'

const SettingsDropdownComponent = () => {
  return (
    <div className='absolute w-[208px] h-[195px] rounded-[10px] border-[1px] border-black bg-white right-4 top-28'>
        <div className='text-center h-full flex justify-center items-center'>
            <div>
            <h1 className='cursor-pointer HammersmithOne text-[24px]'>PROFILE</h1>
            <h1 className='my-4 cursor-pointer HammersmithOne text-[#0B7D61] text-[24px]'>CREATE BOARD</h1>
            <div className='cursor-pointer HammersmithOne text-[#CD0000] text-[24px]'>LOG OUT
            <Image className='ms-5 inline-flex h-[23.5px] w-[23.5px]' src={logout} alt='logout logo'/>
            </div>

            </div>
        </div>
      
    </div>
  )
}

export default SettingsDropdownComponent
