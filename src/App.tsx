import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import Nav from "components/Layout";
import CardList from "components/CardList";
import "./index.css";
import useAuth from "hooks/useAuth";
import useCard from "hooks/useCards";

function App() {
  const { login, logout, getAllUsers, isLoggedIn, getCurrentUser } = useAuth();
  const { deleteCard, deleteCards } = useCard();
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
      {isLoggedIn() && (
        <CardList
          user={user}
          deleteCard={deleteCard}
          deleteCards={deleteCards}
        />
      )}
    </ChakraProvider>
  );
}

export default App;
