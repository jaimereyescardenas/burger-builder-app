import React from 'react';

import NavItem from './NavItem/NavItem';

import classes from './NavItems.module.css';

const NavItems = (props) => (
    <div className={classes.NavItems}>
        <NavItem link={'/'} exact>Burger Builder</NavItem>
        <NavItem link={'/orders'}>Orders</NavItem>
    </div>
);

export default NavItems;