'use client'

import CreateAccountComponent from '@/app/components/CreateAccountComponent'
import NavBarComponent from '@/app/components/NavBarComponent'
import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <NavBarComponent/>
      <div>
        <CreateAccountComponent/>
      </div>
    </div>
  )
}

export default LoginPage