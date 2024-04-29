import React from 'react'

const BoardCardComponent = (prop: {projectName: string}) => {
  return (
    <div className='HammersmithOne text-[40px] bg-[#AEE6D9] w-full h-[117px] flex justify-between mt-[40px] mb-[60px]'>
      <div className='my-auto ms-[34px]'><h1>{prop.projectName}</h1></div>
      <div className='my-auto me-[48px] rounded-full bg-white h-[50px] w-[50px] border-black border-[1px]'></div>
    </div>
  )
}

export default BoardCardComponent
