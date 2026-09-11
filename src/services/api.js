import axios from "axios";

export const api = axios.create({
	baseURL: "http://localhost:8080/",
	timeout: 5000,
});

// Intercepta las solicitudes antes de enviarse
api.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");
	if (token) config.headers.Authorization = `Bearer ${token}`;
	return config;
});