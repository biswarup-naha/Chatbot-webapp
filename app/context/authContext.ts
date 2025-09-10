import { createContext } from "react";

export const AuthContext = createContext<User | undefined>(undefined);

export const token = JSON.parse(localStorage.getItem("token") || "");

export const authFn = () => {};
