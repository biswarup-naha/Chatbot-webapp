"use client";

import React, { useState } from 'react'
import { AppstoreOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SettingOutlined, QuestionCircleOutlined, RobotOutlined,CommentOutlined, GroupOutlined,  CrownOutlined  } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, ConfigProvider, Menu, } from 'antd';
import Image from 'next/image';
import Upgrade from './upgrade';

type MenuItem = Required<MenuProps>['items'][number];

export function BotIcon() {
  return <div className='bg-[#a7a0f8] rounded-[15px] flex justify-center items-center h-12 w-12'><Image src="side-bot.svg" height={28} width={24} alt='bot-logo' /></div>
}

const items: MenuItem[] = [
  {
    key: 'sub0',
    label: '',
    icon: '',
    style: {visibility: 'hidden'}
  },
  {
    key: 'sub0.1',
    label: '',
    icon: '',
    style: {visibility: 'hidden'}
  },
  {
    key: 'sub1',
    label: 'Chat',
    icon: <CommentOutlined />,
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
  {
    key: 'sub3',
    label: 'AI personalities',
    icon: <RobotOutlined />
  },
  {
    key: 'sub4',
    label: 'Settings',
    icon: <SettingOutlined />,
  },
    {
      key: 'grp',
      label: 'Subsrciption',
      icon: <CrownOutlined />,
      style: { color: "gold" },
    },
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
      <Button type="primary" style={{ backgroundColor: 'white', border: 'none', boxShadow: 'none', position: 'absolute', top: '15px', left: '15px', zIndex: '999' }} className='rounded-[15px] flex justify-center items-center h-12 w-12 hover:selection:' onClick={toggleCollapsed}>
        {collapsed ? <MenuUnfoldOutlined style={{ color: 'black' }} /> : <MenuFoldOutlined style={{ color: 'black' }} />}
      </Button>
      <div
        className={`flex flex-col bg-[#3a3c40] transition-all duration-200 ease-int-out h-full ${collapsed ? 'w-20' : 'w-[260px]'
          } ${collapsed ? 'max-md:hidden' : 'max-md:absolute max-md:z-[998] max-md:w-screen'}`}
      >
        <div className="flex justify-end w-full">
        </div>
        <Menu
          className={`flex h-full flex-col border-e-0 `}
          onClick={onClick}
          defaultSelectedKeys={['sub1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          inlineCollapsed={collapsed}
          items={items}
          style={{ borderInlineEnd: "1px solid grey", transition: 'all .3s ease-in-out' }}
        />
      </div>

    </ConfigProvider>

  )
}

export default SideBar;