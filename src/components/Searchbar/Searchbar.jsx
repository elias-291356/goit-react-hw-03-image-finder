import axios from 'axios';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const ARTICLES_QUERY_URL = 'https://pixabay.com/api/?q=cat&page=1&key=';
// const API_KEY = '39426539-25d6a4c73590ef834cf050f72';
// const params = '&image_type=photo&orientation=horizontal&per_page=12'
// const BASE_URL = ARTICLES_QUERY_URL + API_KEY + params;



// const key = 'https://pixabay.com/api/';
// const base_url = 'https://pixabay.com/api/';


export class Searchbar extends Component {
  // state = {
  //   posts: [],

  // };

  // async componentDidMount() {
  //   try {
  //     const { data } = await axios.get(BASE_URL);
  //     this.setState({ posts: data.hits }); // Обновление состояния
  //     console.log(data);
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // }

  render() {
    // const { posts } = this.state;

    return (
      <div>
        <ToastContainer /> {/* Компонент ToastContainer для отображения уведомлений */}

        <header className="searchbar">
          <form className="form">
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              className="input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}
