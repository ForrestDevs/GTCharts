// ForrestDevs
// GT_CHARTS_V1.0
// FEB 14 2024

'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children, ...props }: AuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;