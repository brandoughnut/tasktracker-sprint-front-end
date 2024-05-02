'use client'

import Image from 'next/image'
import logout from '@/assets/logoutbtn.png';
import React from 'react'
import { useRouter } from 'next/navigation';
import AddBoardComponent from './AddBoardComponent';


const SettingsDropdownComponent = () => {

  const router = useRouter();

  const handleProfileClick = () => {
    router.push('/pages/DashboardPage');
  }

  const handleLogOut = () => {
    router.push('/');
  }

  return (
    <div className='absolute w-[208px] h-[195px] rounded-[10px] border-[1px] border-black bg-white right-4 top-28'>
        <div className='text-center h-full flex justify-center items-center'>
            <div>
            <h1 
            onClick={handleProfileClick}
            className='cursor-pointer HammersmithOne text-[24px]'>PROFILE</h1>
            <h1 className='my-4 cursor-pointer HammersmithOne text-[#0B7D61] text-[24px]'>CREATE BOARD</h1>
            <div 
            onClick={handleLogOut}
            className='cursor-pointer HammersmithOne text-[#CD0000] text-[24px]'>LOG OUT
            <Image className='ms-5 inline-flex h-[23.5px] w-[23.5px]' src={logout} alt='logout logo'/>
            </div>

            </div>
        </div>
      
    </div>
  )
}

export default SettingsDropdownComponent
