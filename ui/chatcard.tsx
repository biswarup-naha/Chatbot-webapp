import Image from "next/image";
import React from "react";

const Chatcard = ({ icon, txt }: { icon: string; txt: string }) => {
  return (
    <div
      className="flex-shrink-0 cursor-pointer max-md:text-sm max-h-36 max-w-[168px] text-gray-400
     box-border backdrop-blur-3xl p-4 flex flex-col gap-y-12 max-md:gap-y-4rounded-lg shadow-slate-800 shadow-md border border-gray rounded-lg"
    >
      <Image src={icon} height={24} width={24} alt="" className="max-md:w-4" />
      <p className=" text-[14px]">{txt}</p>
    </div>
  );
};

export default Chatcard;
