import React from 'react';

import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import SideDrawerToggler from './SideDrawerToggler/SideDrawerToggler';

import burgerLogo from '../../../assets/img/burger-logo.png';
import classes from './Toolbar.module.css';

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <SideDrawerToggler clicked={props.drawerToggleClicked} />
        <Logo imgUrl={burgerLogo} altText="Burger Logo" height="80%" />
        <nav className={classes.DesktopOnly}>
            <NavItems />
        </nav>
    </header>
);

export default Toolbar;