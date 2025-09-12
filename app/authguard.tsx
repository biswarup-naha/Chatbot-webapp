'use client';

import { useAuth } from '@/app/context/auth';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const allowedPaths = ['/', '/profile/login'];

    useEffect(() => {
      console.log(pathname)
    if (!isAuthenticated && !allowedPaths.includes(pathname)) {
      router.push('/profile/login');
    }
  }, [isAuthenticated, pathname, router]);

  if (!isAuthenticated && !allowedPaths.includes(pathname)) {
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;
