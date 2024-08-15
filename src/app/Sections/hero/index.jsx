import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className=' px-20'>
      <div className=' flex items-center '>
        <div className=' w-[40%]'>
          <Image src={"/images/anas.png"} height={500} width={500} className=' ' />
        </div>
        <div className=' relative  w-[60%] '>
          <div className=' absolute  -top-40 -left-5'>
            <h1 className=' text-[7rem] font-semibold tracking-[25px] '>CREATIVE</h1>
            <h3 className=' text-4xl font-medium leading-none my-6 tracking-[55px] px-5'>DEVELOPER</h3>
            <h5 className=' text-[4.3rem] font-thin tracking-tight'>SENSIBLE TO FRONTEND</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero