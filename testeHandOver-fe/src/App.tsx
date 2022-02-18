import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./screens/LoginPage";
import Store from "./screens/Store";
import Register from "./screens/Register";
import { AuthProvider } from "./Context/authContext";
export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/store" element={<Store />} />
            <Route path="/cadastro" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
