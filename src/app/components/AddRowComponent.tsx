import React from 'react'
import Image from "next/image";

const AddRowComponent = (prop: {setIsRow: (isRow:boolean) => void}) => {
  return (
    <div>
            <div className='w-[600px] h-[320px] rounded-[10px] border-black border-[1px] z-50 bg-white overflow-y-auto'>
                <div>
                                <div className=' font-HammersmithOne text-5xl text-center w-full mt-10'>Create Row</div>
            <div className='grid justify-center'>
            <input   className='mt-4 font-HoltwoodOneSC text-black rounded-md border border-black text-3xl h-[72px] w-[400px] outline-none text-center  placeholder:font-HammersmithOne' type="text" placeholder='Row Name'/>
            <div className='flex justify-between mt-[26px]'>

            <button  
            onClick={()=> {
                prop.setIsRow(false);
            }}
            className=' bg-[#ABABAB] text-white font-HammersmithOne text-[28px] w-[150px] h-[54px] rounded-md pt-2'>Cancel</button>
            <button 
            onClick={()=> {
                prop.setIsRow(false);
            }}
            className=' bg-darker-teal text-white font-HammersmithOne text-[28px] w-[150px] h-[54px] rounded-md pt-2'>Create</button>
            </div>

            </div>
                </div>

            


        </div>
    </div>
  )
}

export default AddRowComponent
