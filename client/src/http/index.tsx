import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
export const baseURL = 'http://localhost:5000/api';
const $api = axios.create({
    withCredentials: true,
    baseURL
})
$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})
$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config;
    originalRequest._isRetry = true;
    if (error.response.status === 400) {
        return error.response
    }
    if (error.response.status === 401 && !originalRequest._isRetry && error.config) {
        try {
            const response = await axios.get<AuthResponse>(`http://localhost:5000/refresh`, { withCredentials: true })
            localStorage.setItem('token', response.data.accessToken);
            return $api.request(originalRequest);
        }
        catch (e) {
            console.log("Запрос токенов не удался")
        }
        throw error;
    }
})
export default $api;