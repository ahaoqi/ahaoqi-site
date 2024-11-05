import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const service = axios.create({
    baseURL: 'http://www.ahaoqi.com/ahaoqi', // API 基础路径
    timeout: 5000, // 超时时间
});

// 请求拦截器
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig<any>) => {
        // 在请求头中添加 token
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.set('Authorization', `Bearer ${token}`);
        }
        return config;
    },
    (error) => {
        // @ts-ignore
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data; // 可以根据后端接口返回格式调整
    },
    (error) => {
        if (error.response) {
            // 处理错误响应
            console.error(`Error: ${error.response.status}`, error.response.data);
        }
        // @ts-ignore
        return Promise.reject(error);
    }
);

export default service;
