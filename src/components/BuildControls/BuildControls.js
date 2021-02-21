import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import PropTypes from 'prop-types';

import classes from './BuildControls.module.css';

const controls = [
    { label: 'Tomato', type: 'tomato' },
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price: <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button 
            className={classes.OrderButton} 
            disabled={!props.purchasable}
            onClick={props.purchaseMode}>ORDER NOW</button>
    </div>
);

BuildControls.propTypes = {
    price: PropTypes.number.isRequired,
    disabled: PropTypes.object.isRequired,
    ingredientAdded: PropTypes.func.isRequired,
    ingredientRemoved: PropTypes.func.isRequired,
    purchasable: PropTypes.bool.isRequired,
    purchaseMode: PropTypes.func.isRequired
};

export default BuildControls;