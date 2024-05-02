'use client'

import React from 'react'
import exit from '@/assets/Close.png';
import Image from "next/image";

const AddTaskComponent = (prop : {setIsCreateTask : (isCreateTask:boolean) => void}) => {
  return (
    <div>
      <div className='w-[1033px] h-[478px] rounded-[10px] border-black border-[1px] z-50 bg-white overflow-y-auto'>
            <div className='flex justify-between ms-[57px] me-[40px] mt-10'>
                <h1 className='text-[48px] HammersmithOne'>Test Login</h1>
                <Image 
                onClick={() => {prop.setIsCreateTask(false)}}
                className='w-[45px] h-[45px] mt-1 cursor-pointer' src={exit} alt='close button'/>
            </div>
              <h1 className='text-[24px] HammersmithOne ms-[57px] mt-2'>Description</h1>
            <div className='ms-[57px] flex justify-between mt-3.5 me-[48px]'>
              <div>
                <textarea className=' bg-[#F4F4F4] w-[589px] h-[211px] overflow-y-auto rounded-[5px] HammersmithOne px-[14px] py-[16px]'></textarea>
                <div className='flex justify-end mt-4'>
                <button
                        onClick={() => {
                          prop.setIsCreateTask(false);
                        }}
                        className='bg-[#ABABAB] rounded-[10px] me-[30px]'>
                        <p className='text-white px-[24px] py-[5px] HammersmithOne mt-1'>Cancel</p>
                    </button>
                    <button
                        onClick={() => {
                          prop.setIsCreateTask(false);
                        }}
                        className='bg-[#0B7D61] rounded-[10px]'>
                        <p className='text-white px-[24px] py-[5px] HammersmithOne mt-1'>Create</p>
                    </button>
                </div>
              </div>
              <div className='bg-[#F4F4F4] w-[259px] h-[273px] rounded-[5px] px-[26px]'>
                <div className='flex justify-between mt-[25px]'>
                  <div className='text-[20px] HammersmithOne my-auto'>
                    <h1 className=''>Assignee:</h1>
                    <h1 className='text-[#5E5E5E] leading-none'>username</h1>
                  </div>
                  <div className='cursor-pointer bg-blue rounded-full border-black border-[1px] w-[50px] h-[49.25px]'></div>
                </div>
                <div className='mt-6'>
                  <h1 className='HammersmithOne text-[20px]'>Created 12/31/1936</h1>
                </div>
                <div className='flex justify-center mt-2'>
                  <select
                className='bg-white HammersmithOne text-[24px] text-[#0B7D61] border-black lg:w-[187px]  w-full  h-[39px] border-[1px] rounded-[10px] mb-[15px] px-[14px]'>
                <option value="To-Do" className=''>To-Do</option>
                <option value="In Progress" className=''>In Progress</option>
                <option value="Completed" className=''>Completed</option>
                </select>
                </div>
                <div className='flex justify-center'>
                  <select
                className='bg-white HammersmithOne text-[24px] text-[#0B7D61] border-black lg:w-[187px]  w-full  h-[39px] border-[1px] rounded-[10px] mb-[25px] px-[14px]'>
                <option value="1" className=''>Priority - 1</option>
                <option value="2" className=''>Priority - 2</option>
                <option value="3" className=''>Priority - 3</option>
                <option value="4" className=''>Priority - 4</option>
                <option value="5" className=''>Priority - 5</option>

                </select>
                </div>
                
              </div>
            </div>

        </div>
    </div>
  )
}

export default AddTaskComponent