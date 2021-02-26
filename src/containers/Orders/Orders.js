import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import axios from '../../axios-orders';

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount () {

        axios.get('/orders.json')
            .then(resp => {
                const fetchedOrders = [];

                for (let key in resp.data) {
                    fetchedOrders.push({
                        id: key,
                        ...resp.data[key]
                    });
                }

                this.setState( { 
                    loading: false,
                    orders: fetchedOrders 
                });
            })
            .catch(error => {
                this.setState( { loading: false } );
            });

    }

    render () {

        let orders = (
            this.state.orders.map(order => {
                return (
                    <Order
                        key={order.id} 
                        ingredients={order.ingredients} 
                        price={+order.price} />
                )
            })
        );

        if (this.state.loading) {
            orders = <Spinner />;
        }

        return (
            <div>
                {orders}
            </div>
        );
    }

}

export default withErrorHandler(Orders, axios);