import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { requestPosts } from 'services/api';





export class App extends Component {

  state = {
    posts: [],
  }


  fetchPosts = async () => {
    try {
      const posts = await requestPosts()
      this.setState(({ posts: posts }))
    } catch (error) {

    } finally {

    }
  }

  componentDidMount() {
    this.fetchPosts()
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Searchbar


        />
        <ImageGallery

        >

          <ImageGalleryItem />
        </ImageGallery>
      </div>
    );
  }
}
