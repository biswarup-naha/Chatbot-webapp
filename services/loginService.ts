import { api } from "@/api/interceptor";

export async function login(email: string, password: string) {
  const res = await api.post("/Auth/login");
  return res.data;
}
