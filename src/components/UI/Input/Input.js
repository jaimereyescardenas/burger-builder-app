import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {

    const {label, inputType, ...restProps} = props;

    let inputElement = null;

    switch (inputType) {
        case 'input':
            inputElement = <input 
                className={classes.inputElement} 
                {...restProps} />;
            break;
        case 'textarea':
            inputElement = <textarea 
                className={classes.inputElement} 
                {...restProps} />;
            break;
        default:
            inputElement = <input 
                className={classes.inputElement} 
                {...restProps} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{label}</label>
            {inputElement}
        </div>
    );
};

export default Input;