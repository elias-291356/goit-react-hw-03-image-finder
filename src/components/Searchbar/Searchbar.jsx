import React, { Component } from 'react';
import style from '../../Style.module.css'

export class Searchbar extends Component {

  state = {
    inputValue: '',
  }

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.inputValue)
  }




  render() {
    // const { onClickSubmitBtn } = this.props;
    // const { inputValue } = this.state;
    // console.log(this.state);
    return (
      <div>
        <header className={style.Searchbar}>
          <form className={style.SearchForm} onSubmit={this.onSubmit}>
            <button type="submit" className={style.SearchFormButton}>
              <span className={style.SearchFormButtonLabel}
              >Search</span>
            </button>
            <input
              className={style.SearchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.onInputChange}
              value={this.state.inputValue}
              name='inputValue'
            />
          </form>

        </header>
      </div>
    );
  }
}


