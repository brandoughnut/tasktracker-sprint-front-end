'use client'

import React from 'react'
import navbarlogo from '@/assets/navbarexclamation.png';
import Image from 'next/image';

const NavBarComponent = () => {
  return (
    <div className='h-[135px] w-full bg-gradient-to-r from-[#AEE6D9] to-[#3EBE9F]'>
      <div className='h-full flex mx-[36px]'>
        <div className='my-auto'>
          <div className='text-center HoltwoodOneSC'>
            <p className='text-black text-[32px] leading-none'>Maddie</p>
            <p className='text-[#0B7D61] text-[28px] leading-none'>is cool</p>
          </div>
        </div>
        <Image className='h-[96.94px] mt-3.5' src={navbarlogo} alt='exclamation mark'/>
      <div>

      </div>
      </div>
      
      
    </div>
  )
}

export default NavBarComponent
