import axios from 'axios';
import API from '../config/API';

export const getAllUrls = async () => {
  try {
    const { data } = await API.get('/');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postAUrl = async (payload) => {
  try {
    const { data } = await API.post('/', payload);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUrl = async (id, url) => {
  try {
    const { data } = await API.put(`/${id}`, {"url": url});
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteUrl = async (payload) => {
  try {
    const { data } = await API.delete(`/${payload.id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSelectedUrls = async (urls) => {
  try {
    const {data} = await axios.post('http://localhost:8000/api/posts', urls)
    return data
  } catch (error) {
    console.log(error);
  }
};
