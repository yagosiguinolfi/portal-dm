import React, { PropsWithChildren } from 'react';

import { AuthProvider } from "./auth";
import { ToastProvider } from "./toast";

interface Props {
  children: React.ReactNode
}
const AppProvider: React.FC<Props> = function ({ children }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default AppProvider