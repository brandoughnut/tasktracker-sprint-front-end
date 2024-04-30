'use client'

import { saveUsernameToLocalStorage } from '@/utils/LocalSotrage'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import eyeslash from '@/assets/EyeSlash.png'
import eye from '@/assets/Eye.png'
import Image, { StaticImageData } from "next/image";

interface ICreateAccountComponent {
  setHaveAccount: (setAccount: boolean) => void
}

const CreateAccountComponent = (prop: ICreateAccountComponent) => {
  const router = useRouter();

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [verifiedPassword, setVerifiedPassword] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [eyeball1, setEyeball1] = useState<StaticImageData>(eyeslash)
  const [type1, setType1] = useState<string>('password')
  const [eyeball2, setEyeball2] = useState<StaticImageData>(eyeslash)
  const [type2, setType2] = useState<string>('password')

  const handleCreate = () => {
    if (!username) {
      setMessage('Please enter a username')
    } else if (!password) {
      setMessage('Please enter a password')
    } else if (!verifiedPassword) {
      setMessage('Please verify your password')
    } else if (password != verifiedPassword) {
      setMessage('Confirm Password and Password do not match')
    } else {
      setMessage('');
      saveUsernameToLocalStorage(username)
      router.push('/pages/DashboardPage')
    }
  }

  const handleEyeBall1 = () => {
    switch (eyeball1) {
      case eyeslash:
        setEyeball1(eye);
        setType1('text')
        break;
      case eye:
        setEyeball1(eyeslash);
        setType1('password')
        break;
      default:
        break;
    }
  }

  const handleEyeBall2 = () => {
    switch (eyeball2) {
      case eyeslash:
        setEyeball2(eye);
        setType2('text')
        break;
      case eye:
        setEyeball2(eyeslash);
        setType2('password')
        break;
      default:
        break;
    }
  }

  return (
    <div className=' bg-dark-teal flex flex-col items-center w-[730px] h-[100%] py-[51px] px-[25px]'>
      <div className=' font-HoltwoodOneSC text-5xl mb-12'>Create Account</div>
      <div className=' space-y-6'>
        <div className=' w-[595px] flex flex-col space-y-1'>
          <div className=' font-HammersmithOne text-2xl ps-2'>Username</div>
          <input onChange={(e) => setUsername(e.target.value)} className=' h-14 rounded-[10px] font-HammersmithOne text-2xl px-5' type="text" />
        </div>
        <div className=' w-[595px] flex flex-col space-y-1'>
          <div className=' font-HammersmithOne text-2xl ps-2'>Password</div>
          <div className=' relative'>
            <input onChange={(e) => setPassword(e.target.value)} className=' w-full h-14 rounded-[10px] font-HammersmithOne text-2xl px-5' type="text" />
            <Image onClick={handleEyeBall1} src={eyeslash} alt="eyeslash" className="absolute right-4 top-1/2 transform -translate-y-1/2 " />
          </div>
        </div>
        <div className=' w-[595px] flex flex-col space-y-1'>
          <div className=' font-HammersmithOne text-2xl ps-2'>Confirm Password</div>
          <div className=' relative'>
            <input onChange={(e) => setVerifiedPassword(e.target.value)} className=' w-full h-14 rounded-[10px] font-HammersmithOne text-2xl px-5' type="text" />
            <Image onClick={handleEyeBall2} src={eyeslash} alt="eyeslash" className="absolute right-4 top-1/2 transform -translate-y-1/2 " />
          </div>
        </div>
      </div>
      <div className=' w-full flex flex-col items-center mt-10'>
        <button onClick={handleCreate} className=' bg-darker-teal text-white font-HammersmithOne text-[28px] w-[170px] h-[64px] rounded-[10px]'>Create</button>
        <div className=' font-HammersmithOne mt-4'>Already have an Account? <span onClick={() => prop.setHaveAccount(true)} className=' cursor-pointer underline'>Login</span></div>
        <div>
          <div className=' font-HammersmithOne text-red'>{message}</div>
        </div>
      </div>
    </div>
  )
}

export default CreateAccountComponent