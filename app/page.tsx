import Chatsection from "@/ui/chatsection";
import Header from "@/ui/header";
import SideBar from "@/ui/sidebar";
import { Button } from "antd";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-[250px_1fr_1fr] grid-rows-[128px_1fr_1fr] h-screen w-full">
        <SideBar />
        <Header />
        <Chatsection />
      </div>
    </>
  );
}
