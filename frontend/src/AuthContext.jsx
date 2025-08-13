import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
const AuthContext = createContext();


export function AuthProvider({ children }) {
  const [user, setUser] = useState(()=>{
    const token = sessionStorage.getItem('token')
  });

  useEffect(()=>{
    const token = sessionStorage.getItem('token')

    if(token && !user){
      setUser(jwtDecode(token))
    }
  },[user ])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
