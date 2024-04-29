'use client'

import React from 'react'
import navbarlogo from '@/assets/navbarexclamation.png';
import Image from 'next/image';

const NavBarComponent = (prop: {isProfileIcon: boolean}) => {
  return (
    <div className='h-[135px] w-full bg-gradient-to-r from-[#AEE6D9] to-[#3EBE9F]'>
      <div className='h-full flex mx-[36px] justify-between'>
        <div className='flex'>
          <div className='text-center HoltwoodOneSC my-auto'>
            <p className='text-black text-[32px] leading-none'>Maddie</p>
            <p className='text-[#0B7D61] text-[28px] leading-none'>is cool</p>
          </div>
        <Image className='h-[96.94px] mt-3.5' src={navbarlogo} alt='exclamation mark'/>
        </div>
        <div className={prop.isProfileIcon ? 'my-auto h-[66px] w-[67px] rounded-full border-black border-[1px] bg-white' : 'hidden'}>

      </div>
      </div>
      
      
      
    </div>
  )
}

export default NavBarComponent
