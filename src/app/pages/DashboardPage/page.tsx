'use client'

import MyBoardsComponent from '@/app/components/MyBoardsComponent'
import NavBarComponent from '@/app/components/NavBarComponent'
import React, { useEffect } from 'react'

const DashboardPage = () => {

  useEffect(() => {
    document.body.style.backgroundColor = '#F1FFFC'
  }, [])

  return (
    <div>
      <NavBarComponent isProfileIcon={true}/>
      <MyBoardsComponent/>
    </div>
  )
}

export default DashboardPage
