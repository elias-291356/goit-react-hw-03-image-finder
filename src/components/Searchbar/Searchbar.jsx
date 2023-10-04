import React, { Component } from 'react';

export class Searchbar extends Component {

  state = {

    title: '',
  }
  onInputChange = event => {

    this.setState({ [event.target.name]: event.target.value });

  };





  render() {
    const { onClickSubmitBtn } = this.props;
    const { title } = this.state;
    console.log(this.state);
    return (
      <div>
        <header className="searchbar">
          <form className="form" onSubmit={onClickSubmitBtn}>
            <button type="submit" className="button">
              <span className="button-label"
              >Search</span>
            </button>
            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.onInputChange}
              value={this.state.title}
              name='title'
            />
          </form>
        </header>
      </div>
    );
  }
}


