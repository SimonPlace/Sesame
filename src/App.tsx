import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import Nav from "components/Layout";
import "./index.css";
import useAuth from "hooks/useAuth";

function App() {
  const { login, logout, getAllUsers, isLoggedIn, getCurrentUser } = useAuth();

  const user = getCurrentUser();

  return (
    <ChakraProvider>
      <Nav
        user={user}
        login={login}
        getAllUsers={getAllUsers}
        isLoggedIn={isLoggedIn}
        logout={logout}
      />
    </ChakraProvider>
  );
}

export default App;
