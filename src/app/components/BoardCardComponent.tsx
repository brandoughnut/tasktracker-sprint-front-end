'use client'

import React, { useEffect, useState } from 'react'



const BoardCardComponent = (props: {projectName: string; colorID: number}) => {

  const [className, setClassName] = useState<string>('cursor-pointer HammersmithOne text-[40px] w-full h-[117px] flex justify-between mt-[40px] mb-[60px]')


  useEffect(() => {
    switch (props.colorID) {
      case 1:
        setClassName((prevClassName) => prevClassName + ' bg-teal');
        break;
      case 2:
        setClassName((prevClassName) => prevClassName + ' bg-dark-teal');
        break;
      default:
        setClassName((prevClassName) => prevClassName + ' bg-light-teal');
        break;
    }
  }, [props.colorID]);

  return (
    <div className={className}>
      <div className='my-auto ms-[34px]'><h1>{props.projectName}</h1></div>
      <div className='my-auto me-[48px] rounded-full bg-white h-[50px] w-[50px] border-black border-[1px]'></div>
    </div>
  )
}

export default BoardCardComponent
