import React from 'react'
import Chatcard from './chatcard';

const Chatsection = () => {
  return (
    <main className='col-span-2 row-span-2 bg-amber-100 h-full px-52 '>
          <div className='mt-60 flex justify-center items-center flex-col'>
              <img src={"/Subtract.svg"} height={50} width={50} alt="bot-logo" />
              <p className='my-12'>Your daily AI assisstant</p>
              <div className='flex gap-x-6'>
                  <Chatcard icon='/vector.svg' txt='Create a crossword puzzle for me' />
                  <Chatcard icon='/vector (1).svg' txt='Create a crossword puzzle for me' />
                  <Chatcard icon='/vector (2).svg' txt='Create a crossword puzzle for me' />
                  <Chatcard icon='/vector (3).svg' txt='Create a crossword puzzle for me' />
              </div>
        </div>
    </main>
  )
}

export default Chatsection;