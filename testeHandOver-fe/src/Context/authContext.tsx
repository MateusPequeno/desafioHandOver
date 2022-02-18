import React, { createContext, useState } from "react";
import api from "../services/api";
const Context = createContext<any>({});

function AuthProvider({ children }: any) {
  const [authenticated, setAuthenticated] = useState(false);

  async function handleLogin(data: any) {
    const authData = await api.post("/auth", {
      name: data.get("name"),
      password: data.get("password"),
      userPermissionLevel: 1,
    });

    localStorage.setItem("token", JSON.stringify(authData?.data?.token));

    setAuthenticated(true);
  }
  return (
    <Context.Provider value={{ authenticated, handleLogin }}>
      {children}
    </Context.Provider>
  );
}
export { Context, AuthProvider };
