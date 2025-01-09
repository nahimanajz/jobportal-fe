import { config } from "@/config";
import { User, UserLogin } from "@/types/custom/user";
import axios from "axios";

export const signup = async (user: User) => {
  const { data } = await axios.post(`${config()}/auth/signup`, user);
  return data;
};

export const login = async (user: UserLogin) => {
  const url = `${config()}/auth/signin`;
 return await axios.post(url, user)
};


