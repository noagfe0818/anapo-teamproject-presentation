// src/context/AuthContext.jsx

"use client";

import { createContext, useContext, useState } from 'react';

// 1. 방송국 채널 만들기
const AuthContext = createContext();

// 2. 방송국(Provider) 컴포넌트 만들기
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 방송할 기능들
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. '라디오 수신기' (쉽게 쓸 수 있게)
export const useAuth = () => useContext(AuthContext);