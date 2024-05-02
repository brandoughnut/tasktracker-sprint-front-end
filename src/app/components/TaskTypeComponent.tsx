'use client'

import React, { useState } from 'react'
import plus from '@/assets/tasksprintplus.png';
import Image from "next/image";
import TaskCardComponent from './TaskCardComponent';
import { getExampleBoardData } from '@/services/DataServices';

const TaskTypeComponent = (prop: { color: string, type: string, isShown: boolean, setIsViewTask: (isViewTask: boolean) => void, setisCreateTask: (isCreateTask: boolean) => void }) => {

    const BoardData = getExampleBoardData();
    let tasks: {
        name: string;
        description: string;
        priority: number;
        "assigned-to": {
            name: string;
            color: string;
        };
    }[];

    switch (prop.type) {
        case "To-Do":
            tasks = BoardData['To-Do-Tasks'];
            break;
        case "In Progress":
            tasks = BoardData['In-Progress-Tasks'];
            break;
        case "Completed":
            tasks = BoardData['Completed-Tasks']
            break;
        default:
            console.log("error in loading tasks")
            tasks = BoardData['To-Do-Tasks'];
            break;
    }

    return (
        <div className={`h-[252px] w-full ${prop.color} rounded-[5px]`}>
            <div className='flex ms-[20px]'>
                <h1 className='HammersmithOne text-[28px] mt-[7px]'>{prop.type}</h1>
                <Image
                    onClick={() => {
                        prop.setisCreateTask(true);
                    }}
                    className={prop.isShown ? 'cursor-pointer h-[20px] w-[20px] mt-[16px] ms-[10px]' : 'hidden'} src={plus} alt='plus icon' />
            </div>
            <div className='ms-[10px] lg:ms-[51px] flex overflow-x-auto mt-[10px]'>
                {
                    tasks.map((task, idx) => {
                        return (
                            <div key={idx} className='me-[35px]'>
                                <TaskCardComponent setIsViewTask={prop.setIsViewTask} task={task} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TaskTypeComponent
