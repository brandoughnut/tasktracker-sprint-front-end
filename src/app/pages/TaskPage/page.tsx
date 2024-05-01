'use client'

import Image from "next/image";
import NavBarComponent from '@/app/components/NavBarComponent'
import React, { useEffect, useState } from 'react'
import plus from '@/assets/tasksprintplus.png';
import TaskTypeComponent from "@/app/components/TaskTypeComponent";
import ViewTaskComponent from "@/app/components/ViewTaskComponent";

const TaskPage = () => {

    const [isViewTask, setIsViewTask] = useState<boolean>(false);

    useEffect(() => {
        document.body.style.backgroundColor = '#F1FFFC'
      }, [])

  return (
    <div>
      <NavBarComponent isProfileIcon={true}/>



      <div className='lg:ms-[60px] lg:flex'>
        <h1 className='HammersmithOne text-[32px] h-[40px] mt-[47px] ms-[10px] lg:ms-0'>OUR BOARD</h1>
        <div className="flex">
            <div className='mx-[5px] lg:mx-0 lg:ms-[20px] mt-[20px] lg:mt-[44px] flex overflow-x-auto'>
            <div className="me-[12px]">
                <div className='w-[50px] h-[49.25px] bg-blue border-black border-[1px] rounded-full'></div>
            </div>
            <div className="me-[12px]">
                <div className='w-[50px] h-[49.25px] bg-blue border-black border-[1px] rounded-full'></div>
            </div>
            <div className="me-[12px]">
                <div className='w-[50px] h-[49.25px] bg-blue border-black border-[1px] rounded-full'></div>
            </div>
            <div className="me-[12px]">
                <div className='w-[50px] h-[49.25px] bg-blue border-black border-[1px] rounded-full'></div>
            </div>
            <div className="me-[12px]">
                <div className='w-[50px] h-[49.25px] bg-blue border-black border-[1px] rounded-full'></div>
            </div>
            <div className="me-[12px]">
                <div className='w-[50px] h-[49.25px] bg-blue border-black border-[1px] rounded-full'></div>
            </div>
            <div className="me-[12px]">
                <div className='w-[50px] h-[49.25px] bg-blue border-black border-[1px] rounded-full'></div>
            </div>
            <div className="me-[12px]">
                <div className='w-[50px] h-[49.25px] bg-blue border-black border-[1px] rounded-full'></div>
            </div>


        </div>
        <div className="mt-[33px] lg:mt-[55px]">
            <Image className="h-[23.5px] w-[23.5px] cursor-pointer" src={plus} alt="plus icon"/>
        </div>
        </div>

      </div>




    <div className="mx-[10px] lg:mx-[111px] mt-[60.75px]">
        <div>
            <TaskTypeComponent type="To-Do" color="bg-[#AEE6D9]" isShown={true}/>
        </div>
        <div className="my-[43px]">
            <TaskTypeComponent type="In Progress" color="bg-[#6FDFC4]" isShown={false}/>
        </div>
        <div>
            <TaskTypeComponent type="Completed" color="bg-[#3EBE9F]" isShown={false}/>
        </div>
    </div>

    {
        isViewTask && <div className='absolute inset-0 bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur-[2px] flex justify-center items-center z-50'>
        <ViewTaskComponent setIsViewTask={setIsViewTask}/>
        </div>
    }  

    

    </div>
  )
}

export default TaskPage
