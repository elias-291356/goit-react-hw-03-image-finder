import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { requestPosts } from 'services/api';
import { queryByRole } from '@testing-library/react';






export class App extends Component {
  state = {
    posts: [],
    query: '',
    page: 1,


  }

  fetchPosts = async () => {
    try {
      const response = await requestPosts(this.state.query, this.state.page);
      console.log(response);
      this.setState({ posts: response.hits });
    } catch (error) {
    }
  }

  componentDidUpdate(prevProps, PrevState) {
    if (PrevState.query !== this.state.query) {
      this.fetchPosts();
    }
  }


  componentDidMount() {
    this.fetchPosts();
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.onAddPost(this.state)
    console.log('Form submitted');
    this.setState({
      title: '',
    })
  };



  onAddPost = formData => {
    const post = {
      ...formData, id: Math.random()

    };

    this.setState({ posts: [...this.state.posts, post] });
  };

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
          onClickSubmitBtn={this.handleSubmit}

        />
        <ImageGallery
          posts={this.state.posts}
          onAddPost={this.onAddPost} />
        <ToastContainer />
      </div>
    );
  }
}