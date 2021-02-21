import React from 'react';

import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

import burgerLogo from '../../../assets/img/burger-logo.png';
import classes from './SideDrawer.module.css';

const SideDrawer = (props) => {
    
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    
    return (
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo imgUrl={burgerLogo} altText="Burger Logo"/>
                </div>
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Auxiliary>
    );
};

export default SideDrawer;