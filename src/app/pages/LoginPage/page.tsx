'use client'

import CreateAccountComponent from '@/app/components/CreateAccountComponent'
import NavBarComponent from '@/app/components/NavBarComponent'
import React from 'react'

const LoginPage = () => {
  return (
    <div className=' bg-very-light-teal h-[100vh]'>
      <NavBarComponent/>
      <div className=' pt-[107px] flex justify-center h-full'>
        <CreateAccountComponent/>
      </div>
    </div>
  )
}

export default LoginPage