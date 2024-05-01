'use client'

import AddBoardComponent from '@/app/components/AddBoardComponent'
import MyBoardsComponent from '@/app/components/MyBoardsComponent'
import NavBarComponent from '@/app/components/NavBarComponent'
import React, { useEffect, useState } from 'react'

const DashboardPage = () => {

  const [isAddBoard, setIsAddBoard] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.backgroundColor = '#F1FFFC'
  }, [])

  return (
    <div className=' relative'>
      {
        isAddBoard && <div className='absolute inset-0 bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur-[2px] flex justify-center items-center'><AddBoardComponent setIsAddBoard={setIsAddBoard}/></div>
      }
      <NavBarComponent isProfileIcon={true}/>
      <MyBoardsComponent setIsAddBoard={setIsAddBoard}/>
    </div>
  )
}

export default DashboardPage
