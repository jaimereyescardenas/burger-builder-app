import React from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Button from '../UI/Button/Button';

const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map(
        igKey => (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>
                    {igKey}
                </span>
                : {props.ingredients[igKey]}
            </li>)
    );

    return (
        <Auxiliary>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.cancelPurchase}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continuePurchase}>CONTINUE</Button>
        </Auxiliary>
    );
};

export default OrderSummary;