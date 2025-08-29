'use client';

import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

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
    <header className='col-span-2 flex justify-end-safe gap-15 bg-red-500 h-[128px] w-full p-5 items-center'>
        <img src="/feedback.svg" alt="feedback" />
        <img src="/alert.svg" alt="alert" />
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