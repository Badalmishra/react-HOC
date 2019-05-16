import React from 'react';
import stylesWrapper from '../HOC/clickWrapper';

const ButtonOne = (props) => {
    return (
        <button onClick={props.click} >Toggle Modal {props.targetModal}</button>
    )
}

export default stylesWrapper(ButtonOne);