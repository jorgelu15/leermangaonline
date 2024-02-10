import axios from 'axios';

const clienteAxiosUpload = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_IMAGES
});

export default clienteAxiosUpload;