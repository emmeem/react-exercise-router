import React, { Component } from 'react';
import jsonData from '../mockups/data.json'

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[],
        }
    }
    componentDidMount() {
        const pd = [];
        pd.push(jsonData.bicycle);
        pd.push(jsonData.TV);
        pd.push(jsonData.pencil);
        this.setState({
            products: pd,
        })
    }
    render() {
        const dataItem =Object.values(jsonData).
        find(item => item.id ==  this.props.match.params.id)
        console.log(dataItem);
        return (
            <section>
                <h2>Product Details:</h2>
                <p>{dataItem.name}</p>
                <p>{dataItem.id}</p>
                <p>{dataItem.price}</p>
                <p>{dataItem.quantity}</p>
                <p>{dataItem.desc}</p>
            </section>
        );
    }
}

export default ProductDetails;