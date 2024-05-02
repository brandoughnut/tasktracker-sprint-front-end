'use client'

import React from 'react'

const TaskCardComponent = (prop: {setIsViewTask : (isViewTask:boolean) => void; task: {name: string; description: string; priority: number; "assigned-to": {name: string; color: string;};}}) => {
  return (
    <div
    onClick={() => {
      prop.setIsViewTask(true);
    }}
    className='w-[269px] h-[168px] bg-white rounded-[10px] cursor-pointer'>
        <h1 className='HammersmithOne text-[24px] truncate ps-[20px] pe-[41px] pt-[9px]'>{prop.task.name}</h1>
        <p className='HammersmithOne text-[16px] px-[20px] mt-[10px] line-clamp-2'>{prop.task.description}</p>
        <div className='flex justify-between mx-[20px]'>
            <h1 className='my-auto text-[20px] HammersmithOne'>Priority - {prop.task.priority}</h1>
            <div className='bg-blue h-[49.25px] w-[50px] rounded-full border-[1px] border-black' style={{background: prop.task['assigned-to'].color }}></div>
        </div>
    </div>
  )
}

export default TaskCardComponent
