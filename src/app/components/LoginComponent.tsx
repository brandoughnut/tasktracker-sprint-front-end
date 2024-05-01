import { saveUsernameToLocalStorage } from '@/utils/LocalSotrage'
import { useRouter } from 'next/navigation';
import React, { use, useState } from 'react'
import eyeslash from '@/assets/EyeSlash.png'
import eye from '@/assets/Eye.png'
import Image, { StaticImageData } from "next/image";

interface ILoginComponent {
  setHaveAccount: (setAccount: boolean) => void
}

const LoginComponent = (prop: ILoginComponent) => {
  const router = useRouter();
  const secretPassword = 'Hi';

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [eyeball, setEyeball] = useState<StaticImageData>(eyeslash)
  const [type, setType] = useState<string>('password')

  const handleCreate = () => {

    if (!username) {
      setMessage('Please enter a username');
    } else if (!password) {
      setMessage('Please enter a password');
    } else if (password != secretPassword) {
      setMessage('Incorrect Password');
    } else {
      setMessage('');
      saveUsernameToLocalStorage(username)
      router.push('/pages/DashboardPage')
    }

  }

  const handleEyeBall = () => {
    switch (eyeball) {
      case eyeslash:
        setEyeball(eye);
        setType('text')
        break;
      case eye:
        setEyeball(eyeslash);
        setType('password')
        break;
      default:
        break;
    }
  }

  return (
    <div className=' bg-dark-teal flex flex-col items-center w-[730px] h-[637px] py-[51px] px-[25px]'>
      <div className=' font-HoltwoodOneSC text-5xl mb-12'>Login</div>
      <div className=' space-y-6'>
        <div className=' w-[595px] flex flex-col space-y-1'>
          <div className=' font-HammersmithOne text-2xl ps-2'>Username</div>
          <input onChange={(e) => setUsername(e.target.value)} className=' h-14 rounded-[10px] font-HammersmithOne text-2xl px-5' type="text" />
        </div>
        <div className=' w-[595px] flex flex-col space-y-1'>
          <div className=' font-HammersmithOne text-2xl ps-2'>Password</div>
          <div className=' relative'>
            <input onChange={(e) => setPassword(e.target.value)} className=' w-full h-14 rounded-[10px] font-HammersmithOne text-2xl px-5' type={type} />
            <Image onClick={handleEyeBall} src={eyeball} alt="eyeslash" className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10"/>
          </div>


        </div>
      </div>
      <div className=' w-full flex flex-col items-center mt-10'>
        <button onClick={handleCreate} className=' bg-darker-teal text-white font-HammersmithOne text-[28px] w-[170px] h-[64px] rounded-[10px]'>Login</button>
        <div className=' font-HammersmithOne mt-4'>{"Don't have an account?"} <span onClick={() => prop.setHaveAccount(false)} className=' cursor-pointer underline'>Create one now!</span></div>
        <div>
          <div className=' font-HammersmithOne text-red'>{message}</div>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent