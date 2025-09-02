import Image from 'next/image'
import React from 'react'

const Chatcard = ({icon, txt}:{icon: string, txt: string}) => {
  return (
    <div className='max-h-36 max-w-[168px] box-border backdrop-blur-3xl p-4 flex flex-col gap-y-12 rounded-lg shadow-slate-800 shadow-md border border-gray'>
      <Image src={icon} height={24} width={24} alt="" />
      <p className=' text-[14px]'>{txt}</p>
    </div>
  )
}

export default Chatcard;