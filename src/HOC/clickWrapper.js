import React from 'react';

const translateProps = (props) => {
    
    const _click = () => {
        const modal = document.getElementById(props.targetModal);
        let currentClasses = [...modal.classList]
        
        if (currentClasses.includes("hide")) {
            currentClasses.splice(currentClasses.indexOf("hide"),1)
        }else{
            currentClasses=currentClasses+" hide";
        }
        modal.classList = currentClasses;        
    }
    const newProps = {...props,click : _click }
    return newProps;
} 


export default (WrappedComponent) => {
    return function wrappedRender(args) {
        return WrappedComponent(translateProps(args));
    }
}