import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { requestPosts } from 'services/api';
import { queryByRole } from '@testing-library/react';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';


export class App extends Component {
  state = {
    posts: [],
    query: '',
    page: 1,
    loading: false,
    modal: {
      isOpen: false,
      modalData: null,
    },
    largeImageURL: '',
  }

  fetchPosts = async () => {
    try {
      const response = await requestPosts(this.state.query, this.state.page);
      console.log(response);
      this.setState({ posts: response.hits });
    } catch (error) {
    }
  }
  handleKeydown = event => {
    if (event.code === "Escape") {
      console.log('open')
      this.onCloseModal()
    }
  }
  componentDidMount() {
    this.fetchPosts();
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }
 


  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query  || prevState.page !== this.state.page) { 
      const { hits } = await requestPosts(this.state.query,this.state.page);
      this.setState(prevState => ({
        posts: [...prevState.posts,...hits],
      }));
    }
  }



  handleSubmit = (inputValue) => {
    this.setState({
      query: inputValue,
    })
  };
  onClickLoadMore = () => {
    this.setState({ page: this.state.page + 1 })

  }





 onOpenModal = (modalData) => {

    

    this.setState({
      modal: {
        isOpen: true,
        modalData: modalData
      }
    })
    console.log(11111111111)
}

  onCloseModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        modalData: null,
      }
    });
  }


  



  render() {
    return (
      <div>
        <Searchbar
          handleSubmit={this.handleSubmit}
        />
        <ImageGallery
          posts={this.state.posts}
          onOpenModal={this.onOpenModal}
        />
        <ToastContainer />
        <Button
          onClickLoadMore={this.onClickLoadMore}
        />
        {this.state.modal.isOpen === true && (
          <Modal
            data={'hello from modal'}
            onCloseModal={this.onCloseModal}
          />
        )}
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