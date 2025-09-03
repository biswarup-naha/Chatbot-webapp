"use client"

import Image from 'next/image'
import React from 'react'

const Upgrade = () => {
  return (
      <div className="h-[254px] w-[212px] upgrade flex flex-col items-center box-border p-10">
      <div className='flex flex-col items-center box-border flex-wrap max-w-fit'>
              <Image src="/stars.svg" alt='stars' height={48} width={48} className='rounded-[10px]' />
              <h1 className='w-fit'>Upgrade to Pro</h1>
              <p className=' wrap-break-word'>Unlock powerful features with our pro upgrade today!</p>
          </div>
      <div className='h-10 bg-white text-[#a7a0f8] rounded-[8px]'>Upgrade now <Image src="arrow_right_alt.svg" alt='upgrade now' height={16} width={16} /> </div>
    </div>
  )
}

export default Upgrade;