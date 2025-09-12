'use client'

import Loading from "@/ui/loading";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./context/auth";


export default function Home() {
  const [loading, setLoading] = useState<Boolean>(true);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  
  const router = useRouter();
  useEffect(() => {
    router.replace("/ai");
  }, [isAuthenticated]);

  return (
    <div className="h-screen w-full bg-slate-900 text-3xl flex justify-center items-center">
      {loading && <Loading />}
      <div className="flex flex-col gap-10">
        <p className="text-white">hi, welcome <span className="text-blue-200 text-4xl">User</span>.</p>
        <a href="/ai" className="bg-white text-center text-shadow-black px-5 py-2 rounded-xl shadow-2xl shadow-blue-600">Get Started</a>
      </div>
    </div>
  );
}
