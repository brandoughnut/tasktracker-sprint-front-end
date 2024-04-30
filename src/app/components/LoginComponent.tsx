import React from 'react'

interface ILoginComponent {
  setHaveAccount : (setAccount: boolean) => void
}

const LoginComponent = (prop:ILoginComponent) => {
  return (
    <div className=' bg-dark-teal flex flex-col items-center w-[730px] h-[637px] py-[51px] px-[25px]'>
      <div className=' font-HoltwoodOneSC text-5xl mb-12'>Login</div>
      <div className=' space-y-6'>
        <div className=' w-[595px] flex flex-col space-y-1'>
          <div className=' font-HammersmithOne text-2xl ps-2'>Username</div>
          <input className=' h-14 rounded-[10px] font-HammersmithOne text-2xl px-5' type="text" />
        </div>
        <div className=' w-[595px] flex flex-col space-y-1'>
          <div className=' font-HammersmithOne text-2xl ps-2'>Password</div>
          <input className=' h-14 rounded-[10px] font-HammersmithOne text-2xl px-5' type="text" />
        </div>
      </div>
      <div className=' w-full flex flex-col items-center mt-10'>
          <button className=' bg-darker-teal text-white font-HammersmithOne text-[28px] w-[170px] h-[64px] rounded-[10px]'>Login</button>
          <div className=' font-HammersmithOne mt-4'>Don't have an account? <span onClick={()=>prop.setHaveAccount(false)} className=' cursor-pointer underline'>Create one now!</span></div>
        </div>
    </div>
  )
}

export default LoginComponent