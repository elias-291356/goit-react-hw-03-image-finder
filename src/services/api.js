import axios from "axios";

const BASE_URL = "https://pixabay.com/api";
const API_KEY = '39426539-25d6a4c73590ef834cf050f72';
const instance = axios.create({ baseURL: BASE_URL });

// Функция сервиса
export const requestPosts = async (query = 'cat', page = 1) => {

  const { data } = await instance.get(`/?q=${query}`, {
    params: {
      page: page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,

    }
  });
  return data;
} 
