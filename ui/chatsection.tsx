"use client"

import React, { useState } from 'react'
import Chatcard from './chatcard';
import Image from 'next/image';
import { dateParser } from "@biswarup598/date-parser";
import { chat } from '../app/actions/server-actions';


const Chatsection = () => {
  const [start, setStart] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ id: 1, type: 'bot', text: '', time: dateParser(Date.now())[1], isLoading: false }]);
  const [input, setInput] = useState<string>("");

  const sendMsg = () => {
    setStart(true);
    const newMessage = { type: 'user', text: input, time: dateParser(Date.now())[1], isLoading: false };
    setMessages(messages => [...messages, newMessage]);
    setInput("");
    callChat();
  }
  
  function callChat() {
    chat("68baee2d976a91c216039d4a", input, (isProcessing) => {
      setMessages((messages) => {
        const updated = [...messages];

        if (isProcessing) {
          // Add loader only if it doesn't exist yet
          if (!updated.some((m) => m.isLoading)) {
            updated.push({
              type: "bot",
              text: "...",
              time: dateParser(Date.now())[1],
              isLoading: true,
            });
          }
        } else {
          // Remove loader when processing ends
          const loaderIndex = updated.findIndex((m) => m.isLoading);
          if (loaderIndex >= 0) {
            updated.splice(loaderIndex, 1);
          }
        }

        return updated;
      });
    })
      .then((res) => {
        setMessages((messages) => {
          const updated = [...messages];
          const loaderIndex = updated.findIndex((m) => m.isLoading);

          const botMessage = {
            type: "bot",
            text: res || "Sorry can't fetch response right now",
            time: dateParser(Date.now())[1],
            isLoading: false,
          };

          if (loaderIndex >= 0) {
            // Replace loader with final bot message
            updated[loaderIndex] = botMessage;
          } else {
            // If no loader found, just append
            updated.push(botMessage);
          }

          return updated;
        });
      })
      .catch((err) => {
        console.error("Chat error:", err);
      });
  }


  return (
    <main className='bg-[#25272B] h-full max-md:p-0 px-52 text-white'>
      {/* <div className='mt-40 flex justify-end items-center flex-col'> */}
        <div className='flex flex-col mt-40 justify-end max-md:justify-center items-center gap-x-6 p-2'>
        {!start ?
          <>
            <Image className='min-w-12 h-12 max-sm:w-8 max-sm:h-8' src={"/Subtract.svg"} height={50} width={50} alt="bot-logo" />
            <span className='py-12 max-md:text-xs min-w-[150px] text-center'>Your daily AI assisstant</span>
              <div className='flex gap-x-6 max-md:w-[80vw] max-sm:hidden overflow-x-scroll p-2 max-lg:border max-lg:border-zinc-700 max-lg:scrollbar-hide'>
                <Chatcard icon='/vector.svg' txt='Create a crossword puzzle for me' />
                <Chatcard icon='/vector (1).svg' txt='Plan a budget for my vacation' />
                <Chatcard icon='/vector (2).svg' txt='Ethical implications of AI' />
                <Chatcard icon='/vector (3).svg' txt='Calender for the whole month' />
            </div>
          </> : 
          <ul className=' max-md:w-[90%] max-md:relative max-md:bottom-30 w-[792px] h-[586px] flex flex-col gap-y-8 relative bottom-10 overflow-y-scroll'>
            {messages.map((message, index) => 
              message.isLoading ? 
                <li className="loader" key={"loader"}></li>
                 : (message.text !== "" && <li className={` w-fit ${message.type === 'bot' ? 'rounded-2xl p-6 bg-[#3A3C40]' : 'rounded-xl py-5 px-4 border border-[#3A3C40] ml-auto'}`} key={index}>{message.text}</li>)
            )
            }
          </ul>
          }
        <div className='absolute bottom-16 flex'>
          <div className='flex p-4 bg-[#3B3D40] rounded-bl-xl rounded-tl-xl lg:w-[764px] max-md:w-[80vw] max-sm:w-'>
            <input type="text" placeholder='Enter a prompt here' value={input} onChange={e=>setInput(e.target.value)} className='w-full outline-0' onKeyDown={(e) => {if(e.key === "Enter") sendMsg() } } />
            <div className='flex gap-8 max-sm:gap-1'>
              <Image src="gallery.svg" alt="gallery" width={20} height={20} />
              <Image src="mic.svg" alt="mic" width={20} height={20} /></div>
          </div>
          <button name='send' type='button' onClick={sendMsg} className='p-3.5 bg-[#3B3D40] ml-0.5 rounded-br-xl rounded-tr-xl'><Image src="/send.svg" alt='send' height={13} width={14} /></button>
        </div>
      </div>
    </main>
  )
}

export default Chatsection;