

import { Component } from "react";
import style from './Modal.module.css'

export class Modal extends Component {

  handleKeydown = event => {
    if (event.code === "Escape") {
      this.props.onCloseModal()
    }

  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handlOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onCloseModal()
    }
  }

  render() {
    return (
      <div className={style.overlay} onClick={this.handlOverlayClick}>
        <div className={style.modal}>
          <div>

            <img src={this.props.data} alt="somebody" />


          </div>
        </div>
      </div>
    );
  }
}



































