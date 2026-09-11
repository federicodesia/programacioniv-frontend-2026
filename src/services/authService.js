import { api } from "./api";

export const authService = {
    login: (data) => api.post("/auth/login", data).then(res => res.data),
    register: (data) => api.post("/auth/register", data).then(res => res.data)
}