import React, { Component } from 'react';

import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import classes from './ContactData.module.css';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }, 
        loading: false
    }

    newOrderHandler = (event) => {
        event.preventDefault();
        
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Jaime Reyes',
                address: {
                    street: 'Calle Falsa 123',
                    zipCode: '46583',
                    country: 'Chile'
                },
                email: 'test@test.cl'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
          .then(resp => {
            this.setState({ loading: false });
            this.props.history.push('/');
          })
          .catch(error => {
            this.setState({ loading: false });
          });
    }

    render () {

        let form = (
            <form>
                <Input inputType="input" label="Name" type="text" name="name" placeholder="Your name" />
                <Input inputType="input" label="Email" type="email" name="email" placeholder="Your email" />
                <Input inputType="input" label="Street" type="text" name="street" placeholder="Street" />
                <Input inputType="input" label="Postal Code" type="text" name="postal" placeholder="Postal code" />
                <Button btnType="Success" clicked={this.newOrderHandler} >ORDER</Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />;
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }

}

export default ContactData;