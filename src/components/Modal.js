import React from 'react';

const Modal = (props) => {
        return(
        <div className="modal" id={props.id}>
              <h1 >I am modal {props.id}</h1>
        </div>

    );
}
export default Modal;