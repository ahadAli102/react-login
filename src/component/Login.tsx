import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { loginUser } from "../features/user/userSlice";
import { defaultUser, User } from "../model/User";

export const Login = () => {
  const navigate = useNavigate();
  const login = useAppSelector((state) => state.login);
  console.log(login.user);
  const dispatch = useAppDispatch();

  const [savedUser, setSavedUser] = useLocalStorage<User>(
    "saved-user",
    defaultUser
  );

  console.log(savedUser);

  useEffect(() => {
    if (login.user !== undefined && login.user.id !== -1) {
      setSavedUser(login.user);
      navigate("/home");
    }
  }, [login]);

  useEffect(() => {
    if (savedUser.id !== -1) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(loginUser());
        }}
      >
        {" "}
        login
      </button>
    </div>
  );
};
