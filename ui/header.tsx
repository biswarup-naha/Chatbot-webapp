'use client';

import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Image from 'next/image';

const items: MenuProps['items'] = [
    {
        label: (
            <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
                Edit profile
            </a>
        ),
        key: '0',
    },
    {
        label: (
            <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
                Change password
            </a>
        ),
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
                Log out 
            </a>
        ),
        key: '3',
    },
];

const Header = () => {
    
  return (
    <header className='col-span-2 flex justify-end-safe gap-15 bg-[#3A3C40] max-h-[128px] w-full p-5 items-center'>
        <Image src="/feedback.svg" alt="feedback" width={32} height={32} className=' aspect-square' />
        <Image src="/alert.svg" alt="alert" width={32} height={32} className=' aspect-square' />
          <Dropdown menu={{ items }} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                  <Space>
                      <img src="/avatar.svg" alt="profile" />
                  </Space>
              </a>
          </Dropdown>
        
    </header>
  )
}

export default Header