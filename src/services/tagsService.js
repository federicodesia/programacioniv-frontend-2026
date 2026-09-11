import { api } from "./api";

export const tagsService = {
	getAll: () => api.get("/api/tags").then((res) => res.data),
	create: (data) => api.post("/api/tags", data).then((res) => res.data),
	update: ({ id, data }) => api.put(`/api/tags/${id}`, data).then((res) => res.data),
	delete: (id) => api.delete(`/api/tags/${id}`).then((res) => res.data),
};
