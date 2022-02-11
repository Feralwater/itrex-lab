import axios from 'axios';
import { config } from 'config/config';

const instance = axios.create({
  baseURL: config.api.basePath,
});

export default instance;
