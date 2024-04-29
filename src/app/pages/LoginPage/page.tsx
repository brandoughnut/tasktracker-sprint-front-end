'use client'

import CreateAccountComponent from '@/app/components/CreateAccountComponent'
import LoginComponent from '@/app/components/LoginComponent'
import NavBarComponent from '@/app/components/NavBarComponent'
import React, { useState } from 'react'

const LoginPage = () => {

  const [haveAccount, setHaveAccount] = useState<boolean>(true);

  return (
    <div className=' bg-very-light-teal h-[100vh] mb-0 '>
      <NavBarComponent/>
      <div className=' pt-[107px] flex justify-center h-full'>
        {
          haveAccount
          ? <LoginComponent/>
          : <CreateAccountComponent/>
        }

      </div>
    </div>
  )
}

export default LoginPage