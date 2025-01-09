import axios from "axios";
import { getSession, signOut } from "next-auth/react";

 const axiosConfig = () => {
  const instance = axios.create();
	instance.interceptors.request.use(async (request) => {
		const session = await getSession() as any;
		if (session) {
			request.headers.Authorization = `Bearer ${session.accessToken}`;
		}
		return request;
	});

	instance.interceptors.response.use(
		(response) => response,
		(error) => {
			if (
				error?.response?.data?.error?.name === "Token isnot available" ||
				error?.response?.data?.error === "Unprovided token"
			) {
				signOut()
			} else if (error?.response?.status === 401) {
				signOut()
			}
			return Promise.reject(error);
		},
	);
	return instance;

};
export default axiosConfig()


