"use client";

import React from "react";
import type { MenuProps } from "antd";
import { ConfigProvider, Dropdown, Space } from "antd";
import {
  LogoutOutlined,
  ReconciliationOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const items: MenuProps["items"] = [
  {
    label: (
      <Link href="/profile/edit" rel="noopener noreferrer">
        <EditOutlined /> Edit profile
      </Link>
    ),
    key: "0",
    // className: "bg-[#3A3C40]",
    style: { color: "white" },
  },
  {
    label: (
      <Link href="/profile/change-password" rel="noopener noreferrer">
        <ReconciliationOutlined /> Change password
      </Link>
    ),
    key: "1",
    // className: "bg-[#3A3C40]",
    style: { color: "white" },
  },
  {
    label: (
      <Link href="/" rel="noopener noreferrer">
        <LogoutOutlined /> Log out
      </Link>
    ),
    key: "3",
    // className: "bg-[#3A3C40]",
    style: { color: "white" },
  },
];

const Header = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: "rgb(76, 77, 81,0.825)",
        },
        components: {
          Dropdown: {
            controlItemBgActiveHover: "white",
            boxShadow:
              "box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          },
        },
      }}
    >
      <header className="col-span-2 flex justify-end-safe bg-[#3A3C40] gap-15 p-5 items-center max-md:gap-8">
        <Image
          src="/feedback.svg"
          alt="feedback"
          width={32}
          height={32}
          className=" aspect-square max-md:w-5"
        />
        <Image
          src="/alert.svg"
          alt="alert"
          width={32}
          height={32}
          className=" aspect-square max-md:w-5"
        />

        <Dropdown menu={{ items }} trigger={["click"]}>
          <Link href="#" onClick={(e) => e.preventDefault()}>
            <Space>
              <Image
                src="/avatar.svg"
                alt="profile"
                height={48}
                width={48}
                className="aspect-square max-md:w-8"
              />
            </Space>
          </Link>
        </Dropdown>
      </header>
    </ConfigProvider>
  );
};

export default Header;
