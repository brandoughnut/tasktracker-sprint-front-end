'use client'

import CreateAccountComponent from '@/app/components/CreateAccountComponent'
import LoginComponent from '@/app/components/LoginComponent'
import NavBarComponent from '@/app/components/NavBarComponent'
import React, { useEffect, useState } from 'react'

const LoginPage = () => {

  const [haveAccount, setHaveAccount] = useState<boolean>(true);

  useEffect(() => {
    document.body.style.backgroundColor = '#F1FFFC'
  },[])
  return (
    <div className=' '>
      <NavBarComponent isProfileIcon={false}/>
      <div className=' pt-[107px] flex justify-center h-full'>
        {
          haveAccount
          ? <LoginComponent setHaveAccount={setHaveAccount}/>
          : <CreateAccountComponent setHaveAccount={setHaveAccount}/>
        }

      </div>
    </div>
  )
}

export default LoginPage