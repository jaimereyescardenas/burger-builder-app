import React from 'react';

import classes from './SideDrawerToggler.module.css';

const SideDrawerToggler = (props) => (
    <div onClick={props.clicked} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default SideDrawerToggler;