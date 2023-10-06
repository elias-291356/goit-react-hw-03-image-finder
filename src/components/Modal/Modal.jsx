

import { Component } from "react";
import style from './Modal.module.css'
import * as basicLightbox from 'basiclightbox'
export class Modal extends Component {

  handlOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onCloseModal()
    }
  }

  render() {
    return (

      <div className={style.overlay}
        onClick={this.handlOverlayClick}>
        <div className={style.modal}>
          <div>
            {this.props.data}
            <button className={style.closeModalBtn}
              onClick={this.props.onCloseModal}>
              &times;
            </button>
          </div>
        </div>
      </div>
    )





  }
}



































