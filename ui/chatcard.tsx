import Image from 'next/image'
import React from 'react'

const Chatcard = ({icon, txt}:{icon: string, txt: string}) => {
  return (
    <div className='h-36 w-[168px] bg-slate-500 p-4 flex flex-col gap-y-12 rounded-lg shadow-slate-800 shadow-md'>
      <Image src={icon} height={24} width={24} alt="" />
      <p className=''>{txt}</p>
    </div>
  )
}

export default Chatcard