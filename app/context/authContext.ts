import { createContext } from "react";

export const AuthContext = createContext<User | undefined>(undefined);