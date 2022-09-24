import axios from 'axios';
import { getToken } from '../services/localStorage';

axios.defaults.baseURL = 'http://localhost:8009';

//แนบ token เข้าไปใน headers.Authorization ก่อนส่ง req
axios.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = 'Bearer ' + token;
        }

        return config
    },
    err => Promise.reject(err)
)

export default axios;