import React from 'react';

import classes from './Logo.module.css';

const Logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={props.imgUrl} alt={props.altText}/>
    </div>
);

export default Logo;