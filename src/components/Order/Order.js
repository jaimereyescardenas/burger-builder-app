import React from 'react';

import classes from './Order.module.css';

const Order = (props) => {

    const ingredients = Object.keys(props.ingredients)
        .map(igKey => (
            <span key={igKey}>{igKey}: {props.ingredients[igKey]}</span>
        ));

    return (
        <div className={classes.Order}>
            <p className={classes.Ingredients}>Ingredients: {ingredients}</p>
            <p>Price: <strong>$ {props.price.toFixed(2)}</strong></p>
        </div>
    )
};

export default Order;