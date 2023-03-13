import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useLocalStorage } from "usehooks-ts";
import { defaultUser, User } from "../model/User";

export const Home = () => {
  const navigate = useNavigate();
  const login = useAppSelector((state) => state.login);
  console.log(login);
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
  return <div>Home</div>;
};
