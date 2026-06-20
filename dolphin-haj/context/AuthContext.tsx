'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

interface User {
  phone: string;
  role: 'admin' | 'customer';
}

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  login: (phone: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = (phone: string) => {
    const isAdminPhone = phone === '0000000000';
    setUser({ phone, role: isAdminPhone ? 'admin' : 'customer' });
    setIsAdmin(isAdminPhone);
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
