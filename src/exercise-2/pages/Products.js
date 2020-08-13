import React, {Component} from 'react';
import { Link} from 'react-router-dom';

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
        </section>
        );
    }
}

export default Products;