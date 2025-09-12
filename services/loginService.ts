import { api } from "@/api/interceptor";
import axios from "axios";

export async function loginService(email: string, password: string) {
  const res=await axios.post("https://localhost:7168/api/Auth/login", { email, password })
  if (res) return res.data;
}
