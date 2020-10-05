import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const instance = axios.create({ baseUrl: baseURL });

export default instance;
