import Chatsection from "@/ui/chatsection";
import Header from "@/ui/header";
import SideBar from "@/ui/sidebar";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full flex transition-width duration-300 ease-in-out">
        <SideBar />
        <div className="flex flex-col w-screen">
          <Header />
          <Chatsection />
        </div>
      </div>
    </>
  );
}
