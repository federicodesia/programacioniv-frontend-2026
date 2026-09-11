import { api } from "./api";

export const categoriesService = {
	getAll: () => api.get("/api/categories").then((res) => res.data),
	create: (data) => api.post("/api/categories", data).then((res) => res.data),
	update: ({ id, data }) => api.put(`/api/categories/${id}`, data).then((res) => res.data),
	delete: (id) => api.delete(`/api/categories/${id}`).then((res) => res.data),
};
