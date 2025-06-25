/* eslint-disable @typescript-eslint/no-explicit-any */
// tự động refesh access token nếu hết hạn khi gọi api
import axios, { AxiosError } from "axios";
import { AppStore } from "@/store";
import { setCredentials, logout } from "@/store/features/authSlice";

// Khai báo biến để chứa Redux store sau khi khởi tạo
let storeRef: AppStore;

export const setStore = (store: AppStore) => {
  storeRef = store;
};

// Tạo axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true, // gửi cookie chứa refresh_token
});

// Request interceptor – gắn access_token vào headers
api.interceptors.request.use(
  (config) => {
    const token = storeRef?.getState().auth.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor – xử lý refresh nếu token hết hạn
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as any;

    if (error.response?.status === 401 && !originalRequest._retry) {
      const isLoginRequest =
        originalRequest.url && originalRequest.url.includes("/auth/login");
      if (!isLoginRequest) {
        originalRequest._retry = true;
        try {
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/refresh`,
            { withCredentials: true }
          );

          const { access_token, user } = res.data;

          // Cập nhật accessToken mới vào Redux
          storeRef.dispatch(
            setCredentials({ accessToken: access_token, user })
          );

          // Gắn accessToken mới vào request cũ
          originalRequest.headers.Authorization = `Bearer ${access_token}`;

          return api(originalRequest);
        } catch (refreshError) {
          storeRef.dispatch(logout());
          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(error);
  }
);

export default api;
