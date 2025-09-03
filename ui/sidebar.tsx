"use client";

import React, { useState } from 'react'
import { AppstoreOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, ConfigProvider, Menu, } from 'antd';
import Image from 'next/image';

type MenuItem = Required<MenuProps>['items'][number];

export function BotIcon() {
  return <div className='bg-[#a7a0f8] rounded-[15px] flex justify-center items-center h-12 w-12'><Image src="side-bot.svg" height={28} width={24} alt='bot-logo' /></div>
}

const items: MenuItem[] = [
    // {
    //   key: 'sub0',
    //   label: '',
    //   icon: <BotIcon />,
    //   className: 'flex justify-center items-center'
    // },
  {
    key: 'sub1',
    label: 'Chat',
    icon: <MailOutlined />,
    // children: [
    //   {
    //     key: 'g1',
    //     label: 'Item 1',
    //     type: 'group',
    //     children: [
    //       { key: '1', label: 'Option 1' },
    //       { key: '2', label: 'Option 2' },
    //     ],
    //   },
    //   {
    //     key: 'g2',
    //     label: 'Item 2',
    //     type: 'group',
    //     children: [
    //       { key: '3', label: 'Option 3' },
    //       { key: '4', label: 'Option 4' },
    //     ],
    //   },
    // ],
  },
  {
    key: 'sub2',
    label: 'Chat History',
    icon: <AppstoreOutlined />,
    children: [
      { key: '5', label: 'History 1' },
      { key: '6', label: 'History 2' },
    ],
  },
  // {
  //   type: 'divider',
  // },
  {
    key: 'sub3',
    label: 'AI personalities'
  },
  {
    key: 'sub4',
    label: 'Settings',
    icon: <SettingOutlined />,
  },
  // {
  //   key: 'grp',
  //   label: 'Group',
  //   type: 'item',
  //   itemIcon: <Upgrade />,
  //   className: 'py-[254px] px-[212px] box-border'
  // },
];

const SideBar = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  }

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    // <aside className="row-span-3 col-start-1 flex h-full flex-col px-3 py-4 md:px-2 bg-blue-400">
    //   <Link
    //     className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
    //     href="/"
    //   >
    //     <div className="w-32 text-white md:w-40">
    //       logo
    //     </div>
    //   </Link>
    //   <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
    //     <NavLinks />
    //     <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
    //     <form>
    //       <Link href="/" className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
    //         logout
    //         <div className="hidden md:block">Sign Out</div>
    //       </Link>
    //     </form>
    //   </div>
    // </aside>
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: '#3a3c40', 
          colorText: "white",
          padding: 0,
          margin: 0
        },
        components: {
          Menu: {
            itemSelectedBg: '#a7a0f8',
            itemSelectedColor: '#000',
            margin: 0,
            padding: 0,
          },
        },

      }}
    >
      <div className={`flex flex-col bg-[#3a3c40] h-full ${collapsed ? '' : 'w-[256px]'} `}>
        <div className="flex justify-end transition-all duration-300 ease-in-out w-full">
          <Button type="primary" style={{ backgroundColor: '#a7a0f8' }} className='rounded-[15px] flex justify-center items-center h-12 w-12' onClick={toggleCollapsed}>
            <Image src="side-bot.svg" height={28} width={24} alt='bot-logo' />
          </Button>
        </div>
        <Menu
          className='flex h-full w-[258px] flex-col border-e-0'
          onClick={onClick}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>
      
    </ConfigProvider>

  )
}

export default SideBar;