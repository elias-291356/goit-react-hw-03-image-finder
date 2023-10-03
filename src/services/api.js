import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BASE_URL = "https://pixabay.com/api";
const API_KEY = '39426539-25d6a4c73590ef834cf050f72';
const instance = axios.create({ baseURL: BASE_URL });

// Функция сервиса
export const requestPosts = async (query = 'cat', page = 1) => {
  try {
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
  } catch (error) {
    // Обработка ошибки здесь
    toast.error(error.message);
  }
}