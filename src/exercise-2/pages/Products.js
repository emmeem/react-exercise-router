import React, {Component} from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails'

class Products extends Component {
    render() {
        return (
        <section>
            <p>All Products:</p>
            <p><Link to={`${this.props.match.url}/1`} 
             className="pro">Bicycle</Link></p>
            <p><Link to={`${this.props.match.url}/2`} 
             className="pro">TV</Link></p>
             <p><Link to={`${this.props.match.url}/3`} 
             className="pro">Pencil</Link></p>
            <Switch>
            <Route exact  path={`${this.props.match.url}/:id`} 
            component={ProductDetails} />
            </Switch>
            
        </section>
        );
    }
}

export default Products;