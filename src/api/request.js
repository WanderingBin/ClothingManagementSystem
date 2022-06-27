//引入axios并二次封装
import axios from 'axios'
const requests = axios.create({
    // 网络请求地址
    baseURL: '/api',
    // 请求超时
    timeout: 5000
})
requests.interceptors.request.use((config) => {
        return config;
    })
    //响应拦截器
requests.interceptors.response.use((res) => {
    //服务器成功的回调函数
    return res.data
}, (error) => {
    return Promise.reject(error)
})

export default requests;