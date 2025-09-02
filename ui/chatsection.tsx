import React from 'react'
import Chatcard from './chatcard';
import Image from 'next/image';

const Chatsection = () => {
  return (
    <main className='box-border col-span-2 row-span-2 bg-[#25272B] h-full px-52 text-white'>
      <div className='mt-60 flex justify-center items-center flex-col'>
        <img src={"/Subtract.svg"} height={50} width={50} alt="bot-logo" />
        <p className='my-12'>Your daily AI assisstant</p>
        <div className='flex gap-x-6'>
          <Chatcard icon='/vector.svg' txt='Create a crossword puzzle for me' />
          <Chatcard icon='/vector (1).svg' txt='Plan a budget for my vacation' />
          <Chatcard icon='/vector (2).svg' txt='Ethical implications of AI' />
          <Chatcard icon='/vector (3).svg' txt='Calender for the whole month' />
        </div>
        <div className='mt-36 flex'>
          <div className='flex p-4 bg-[#3B3D40] rounded-bl-xl rounded-tl-xl'>
            <input type="text" placeholder='Enter a prompt here' className='w-[720px]' />
            <Image src="gallery.svg" alt="gallery" width={20} height={20} />
            <Image src="mic.svg" alt="mic" width={20} height={20} />
          </div>
          <button name='send' type='button' className='p-3.5 bg-[#3B3D40] ml-0.5 rounded-br-xl rounded-tr-xl'><Image src="/send.svg" alt='send' height={13} width={14} /></button>
        </div>
      </div>
    </main>
  )
}

export default Chatsection;