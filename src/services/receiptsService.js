import axios from "axios";
import { api } from "./api";

export const receiptsService = {
    getAll: () => api.get("/api/payment-receipts").then(res => res.data),
    create: (data) => api.post("/api/payment-receipts", axios.toFormData(data)).then(res => res.data),
    getImageUrl: (imageKey) => api.get(`/api/payment-receipts/files/url/${imageKey}`).then(res => res.data),
}