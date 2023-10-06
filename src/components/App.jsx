import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { requestPosts } from 'services/api';
import { Loader } from './Loader/Loader';
export class App extends Component {
  state = {
    error: null,
    posts: [],
    query: '',
    page: 1,
    isLoading: false,
    modal: {
      isOpen: false,
      modalData: null,
    },
  }

  fetchPosts = async () => {
    try {
      this.setState({
        isLoading: true,
      });

      const response = await requestPosts(this.state.query, this.state.page);
      console.log(response);
      this.setState(prevState => ({
        posts: this.state.page > 1 ? [...prevState.posts, ...response.hits] : response.hits,
      }));
    } catch (error) {
      this.setState({ error: error.message });

    } finally {
      this.setState({
        isLoading: false,

      });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.fetchPosts()
    }
  }
  handleSubmit = (inputValue) => {
    this.setState({
      query: inputValue,
      page: 1,
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
        <Loader
          loading={this.state.isLoading}
          error={this.state.error} />
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
            data={this.state.modal.modalData}
            onCloseModal={this.onCloseModal}
          />
        )}
      </div>
    );
  }
}







