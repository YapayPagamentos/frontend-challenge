import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9004'
});

export default api;