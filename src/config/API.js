import axios from 'axios';

import { baseURL } from '../utils/constants';

const API = axios.create({
  baseURL,
});

export default API;
