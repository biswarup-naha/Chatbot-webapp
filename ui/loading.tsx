'use client'

import React, { useEffect, useRef } from 'react'
import { stagger, waapi } from 'animejs';

const Loading:React.FC = () => {
    const squaresRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        if (squaresRef.current.length > 0) {
            waapi.animate('.square', {
                y: {
                    to: [0, -30, 0],
                    ease: 'out(4)',
                    duration: 1000,
                },
                rotate: { from: -180, to: 0, ease: 'out(3)' },
                scale: { to: [.65, 1, .65], ease: 'inOut(3)' },
                duration: 500,
                delay: stagger(75),
                loop: true,
            });
        }
    },[])


  return (
      <div className="small justified row flex gap-7 justify-center items-center absolute backdrop-blur-xs h-screen w-full backdrop-grayscale-25">
          {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                  key={i}
                  ref={(el) => {
                      if (el) squaresRef.current[i] = el
                  }}
                  className="square w-6 h-6 bg-blue-300 rotate-180 rounded-sm"
              />
          ))}
      </div>
  )
}

export default Loading;