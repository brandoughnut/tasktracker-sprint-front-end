'use client'

import Image from "next/image";
import NavBarComponent from '@/app/components/NavBarComponent'
import React, { useEffect, useState } from 'react'
import plus from '@/assets/tasksprintplus.png';
import TaskTypeComponent from "@/app/components/TaskTypeComponent";
import ViewTaskComponent from "@/app/components/ViewTaskComponent";
import invite from '@/assets/invitebox.png';
import AddTaskComponent from "@/app/components/AddTaskComponent";
import AddRowComponent from "@/app/components/AddRowComponent";

const TaskPage = () => {

    const [isViewTask, setIsViewTask] = useState<boolean>(false);
    const [isInvite, setIsInvite] = useState<boolean>(false);
    const [isCreateTask, setIsCreateTask] = useState<boolean>(false);
    const [isRow, setIsRow] = useState<boolean>(false);

    useEffect(() => {
        document.body.style.backgroundColor = '#F1FFFC'
      }, [])

  return (
    <div className="relative">
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



        </div>
        <div className="mt-[33px] lg:mt-[55px]">
            <Image 
            onClick={() => {
                setIsInvite(!isInvite);
            }}
            className="h-[23.5px] w-[23.5px] cursor-pointer" src={plus} alt="plus icon"/>

            <div className={isInvite ? "md:absolute top-[320px] md:top-[220px] lg:top-[155px] md:ms-[34px]": "hidden"}>
                <div className="relative">
                    <Image src={invite} alt="invite tag"/>
                    <h1 className="absolute top-[15px] md:top-[24px] HammersmithOne text-[20px] md:text-[24px] ms-[110px] md:ms-[160px]">Invite Code</h1>
                    <h1 className="text-[30px] top-[50px] md:text-4xl HoltwoodOneSC absolute ms-[90px] md:ms-[135px] md:top-[70px] text-[#3177FF]">XYZ456</h1>
                </div>
            </div>
        </div>

        
        </div>

      </div>

      

    <div className="ms-[10px] lg:ms-[111px] mt-[18.75px] flex">
        <h1 className="HammersmithOne text-[28px]">Create New Row</h1>
        <Image 
        onClick={() => {
            setIsRow(true);
        }}
        className="ms-3 h-[20px] w-[20px] mt-[8px] cursor-pointer" src={plus} alt="plus icon"/>
    </div>


    <div className="mx-[10px] lg:mx-[111px]">
        <div>
            <TaskTypeComponent setisCreateTask={setIsCreateTask} type="To-Do" color="bg-[#AEE6D9]" isShown={true} setIsViewTask={setIsViewTask}/>
        </div>
        <div className="my-[43px]">
            <TaskTypeComponent setisCreateTask={setIsCreateTask} type="In Progress" color="bg-[#6FDFC4]" isShown={false} setIsViewTask={setIsViewTask}/>
        </div>
        <div>
            <TaskTypeComponent setisCreateTask={setIsCreateTask} type="Completed" color="bg-[#3EBE9F]" isShown={false} setIsViewTask={setIsViewTask}/>
        </div>
    </div>

    {
        isViewTask && <div className='absolute inset-0 bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur-[2px] flex justify-center items-center z-50'>
        <ViewTaskComponent setIsViewTask={setIsViewTask}/>
        </div>
    }  

    {
        isCreateTask && <div className='absolute inset-0 bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur-[2px] flex justify-center items-center z-50'>
        <AddTaskComponent setIsCreateTask={setIsCreateTask}/>
        </div>
    }  
    {
        isRow && <div className='absolute inset-0 bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur-[2px] flex justify-center items-center z-50'>
        <AddRowComponent setIsRow={setIsRow}/>
        </div>
    }

    

    </div>
  )
}

export default TaskPage
