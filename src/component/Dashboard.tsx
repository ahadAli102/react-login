import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { defaultUser, User } from "../model/User";

export const Dashboard = () => {
  const navigate = useNavigate();
  const login = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();

  const [savedUser, setSavedUser] = useLocalStorage<User>(
    "saved-user",
    defaultUser
  );
  console.log(savedUser);

  useEffect(() => {
    if (savedUser.id === -1) {
      navigate("/login");
    }
  }, [login]);
  return <div>Dashboard</div>;
};
