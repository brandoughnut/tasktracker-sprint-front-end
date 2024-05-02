'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'



const BoardCardComponent = (props: { projectName: string; colorID: number; members: { name: string; color: string }[] }) => {

  const router = useRouter();

  const [className, setClassName] = useState<string>('cursor-pointer HammersmithOne text-[40px] w-full h-[117px] flex justify-between mt-[40px] mb-[60px]')

  const handleClick = () => {
    router.push('/pages/TaskPage')
  }

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
    <div onClick={handleClick} className={className}>
      <div className='my-auto ms-[34px]'><h1>{props.projectName}</h1></div>
      <div className=' flex me-[38px] '>
        {
          props.members.map((member,idx) => {

            return (
              <div key={idx} className='my-auto me-[10px] rounded-full h-[50px] w-[50px] border-black border-[1px]' style={{backgroundColor: member.color}}></div>
            )
          })
        }
      </div>


    </div>
  )
}

export default BoardCardComponent
