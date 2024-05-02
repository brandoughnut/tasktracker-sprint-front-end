'use client'

import React from 'react'
import exit from '@/assets/Close.png';
import Image from "next/image";

const ViewTaskComponent = (prop: {setIsViewTask : (isViewTask:boolean) => void}) => {
  return (
    <div>
        <div className='w-[1033px] h-[673px] rounded-[10px] border-black border-[1px] z-50 bg-white overflow-y-auto'>
            <div className='flex justify-between ms-[57px] me-[40px] mt-10'>
                <h1 className='text-[48px] HammersmithOne'>Test Login</h1>
                <Image 
                onClick={() => {prop.setIsViewTask(false)}}
                className='w-[45px] h-[45px] mt-1 cursor-pointer' src={exit} alt='close button'/>
            </div>
              <h1 className='text-[24px] HammersmithOne ms-[57px] mt-2'>Description</h1>
            <div className='ms-[57px] flex justify-between mt-3.5 me-[48px]'>
              <div>
                <div className=' bg-[#F4F4F4] w-[589px] h-[123px] overflow-y-auto rounded-[5px] HammersmithOne px-[14px] py-[16px]'>A short description</div>
                <div>
                  <h1 className='mt-5 text-[24px] HammersmithOne'>Comments</h1>
                  <textarea className='mt-1.5 w-[584px] h-[89px] border-black border-[1px] rounded-[10px]'></textarea>
                </div>
              </div>
              <div className='bg-[#F4F4F4] w-[259px] h-[273px] rounded-[5px] px-[26px]'>
                <div className='flex justify-between mt-[25px]'>
                  <div className='text-[20px] HammersmithOne my-auto'>
                    <h1 className=''>Assignee:</h1>
                    <h1 className='text-[#5E5E5E] leading-none'>username</h1>
                  </div>
                  <div className='bg-blue rounded-full border-black border-[1px] w-[50px] h-[49.25px]'></div>
                </div>
                <div className='mt-6'>
                  <h1 className='HammersmithOne text-[20px]'>Created 12/31/1936</h1>
                </div>
                <div className='flex justify-center mt-2'>
                  <select
                className='bg-white HammersmithOne text-[24px] text-[#0B7D61] border-black lg:w-[187px]  w-full  h-[39px] border-[1px] rounded-[10px] mb-[25px] px-[14px]'>
                <option value="To-Do" className=''>To-Do</option>
                <option value="In Progress" className=''>In Progress</option>
                <option value="Completed" className=''>Completed</option>
                </select>
                </div>
                
              </div>
            </div>

        </div>

        
    </div>
  )
}

export default ViewTaskComponent
