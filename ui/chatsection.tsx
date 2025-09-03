"use client"

import React, { useState } from 'react'
import Chatcard from './chatcard';
import Image from 'next/image';
import { dateParser } from "@biswarup598/date-parser";
import { GoogleGenAI } from '@google/genai';


const Chatsection = () => {
  const [start, setStart] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ id: 1, type: 'bot', text: 'Hi! How can I help you?', time: dateParser(Date.now())[1], isLoading: false }]);

  const sendMsg = () => {
    setStart(true);
    const newMessage = { type: 'user', text: 'Good', time: dateParser(Date.now())[1], isLoading: false };
    setMessages([...messages, newMessage]);
  }

  // const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

  function send() {
    
  }


  return (
    <main className='box-border bg-[#25272B] h-full px-52 text-white'>
      <div className='mt-40 flex justify-end items-center flex-col'>
        {!start ?
          <>
            <img src={"/Subtract.svg"} height={50} width={50} alt="bot-logo" />
              <p className='my-12'>Your daily AI assisstant</p>
              <div className='flex gap-x-6'>
                <Chatcard icon='/vector.svg' txt='Create a crossword puzzle for me' />
                <Chatcard icon='/vector (1).svg' txt='Plan a budget for my vacation' />
                <Chatcard icon='/vector (2).svg' txt='Ethical implications of AI' />
                <Chatcard icon='/vector (3).svg' txt='Calender for the whole month' />
            </div>
          </> : 
          <ul className=' bg-slate-400 w-[792px] h-full'>
            {messages.map((message, index) => {
              return <li key={index}>{ message.text }</li>
            })}
          </ul>
          }
        <div className=' fixed bottom-16 flex'>
          <div className='flex p-4 bg-[#3B3D40] rounded-bl-xl rounded-tl-xl'>
            <input type="text" placeholder='Enter a prompt here' className='w-[720px] outline-0' onKeyDown={(e) => {if(e.key === "Enter") sendMsg() } } />
            <Image src="gallery.svg" alt="gallery" width={20} height={20} />
            <Image src="mic.svg" alt="mic" width={20} height={20} />
          </div>
          <button name='send' type='button' onClick={sendMsg} className='p-3.5 bg-[#3B3D40] ml-0.5 rounded-br-xl rounded-tr-xl'><Image src="/send.svg" alt='send' height={13} width={14} /></button>
        </div>
      </div>
    </main>
  )
}

export default Chatsection;