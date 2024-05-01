'use client'

import React, { useState } from 'react'



const BoardCardComponent = (prop: {projectName: string; colorID: number}) => {

  const [className, setClassName] = useState<string>('cursor-pointer HammersmithOne text-[40px] w-full h-[117px] flex justify-between mt-[40px] mb-[60px]')

  switch(prop.colorID){
    case 1:
      setClassName(className + ' bg-teal')
      break;
    case 2:
      setClassName(className + ' bg-dark-teal')
      break;
    default:
      setClassName(className + ' bg-light-teal')
      break;
  }

  return (
    <div className={className}>
      <div className='my-auto ms-[34px]'><h1>{prop.projectName}</h1></div>
      <div className='my-auto me-[48px] rounded-full bg-white h-[50px] w-[50px] border-black border-[1px]'></div>
    </div>
  )
}

export default BoardCardComponent
