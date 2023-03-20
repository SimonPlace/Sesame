import { UserType } from "types/types";
import fakeData from "stubs/index.json";
import { useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const login = (user: UserType | null) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const getCurrentUser = () => {
    const user = localStorage.getItem("user");

    if (user) {
      const flatUser = JSON.parse(user);
      return flatUser;
    } else {
      return undefined;
    }
  };

  const modifyUser = (user: UserType) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const getAllUsers = () => {
    const users = localStorage.getItem("users");

    if (users) {
      const flatUser = JSON.parse(users);
      const fakeDataUsers = fakeData.users.filter(
        (user) => flatUser.id !== user.id
      );

      return fakeDataUsers;
    }
    return fakeData.users;
  };

  const isLoggedIn = () => {
    return !!localStorage.getItem("user");
  };

  return {
    user,
    logout,
    login,
    getAllUsers,
    isLoggedIn,
    getCurrentUser,
    modifyUser,
  };
};

export default useAuth;
