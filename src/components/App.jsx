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
    loading: false,


  }

  fetchPosts = async () => {
    try {
      const response = await requestPosts(this.state.query, this.state.page);
      console.log(response);
      this.setState({ posts: response.hits });
    } catch (error) {
    }
  }
  //  finally {
  //   this.setState({ loading: false });
  // }

  componentDidMount() {
    // this.setState({ loading: true })
    this.fetchPosts();
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchPosts();
    }
  }






  // onAddPost = formData => {
  //   const post = {
  //     ...formData, id: Math.random()

  //   };

  //   this.setState({ posts: [...this.state.posts, post] });
  // };


  handleSubmit = (inputValue) => {
    this.setState({
      query: inputValue,
    })
  };




  render() {
    return (
      <div
        // style={{
        //   height: '100vh',
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   fontSize: 40,
        //   color: '#010101'
        // }}
      >




        <Searchbar
          // onClickSubmitBtn={this.handleSubmit}
          handleSubmit={this.handleSubmit}
        />
        <ImageGallery

          // onAddPost={this.onAddPost}
          posts={this.state.posts}

        // map={this.state.posts.map}
        // loading={this.state.loading}
        />


        <ToastContainer />
      </div>
    );
  }
}








  //  когда я в inputValu  ввожу на страничке , то у меня при сабмите меняется state  inputValue, но не сам по себе ему нужно сделать
  // setState({ сказать ему что Query теперь: inputValue });
  // а если меняется state, тогда выполняется componentDidUpdate, а  componentDidUpdate - это у меня повторный запрос на сервер fetchPosts,
  // с учетом нового значения, который ввеи в инпут
  //  componentDidUpdate - принимает prevProps, prevState, и ему нужно сделать сравнение , если значение  параметра query не равно значению query,
  // которое  у нас по умолчанию в первичном запросе 
  //  тогда выполнить запрос, с учетом нового значения инпута