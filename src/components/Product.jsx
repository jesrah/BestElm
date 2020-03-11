import React from 'react';
import ProductImage from './ProductImage.jsx';
import data from '../products.json';
import { Col } from 'react-bootstrap';

const products = data.groups;

class Product extends React.Component{
    //handlePrice addresses the fact that the price keys in the JSON are not consistently named
    handlePrice (obj) {
        let price = '';
        if ('priceRange' in obj) {
            price = `${obj.priceRange.selling.low} - ${obj.priceRange.selling.high}`;
        }
        else {
            price = obj.price.selling;
        }
        return price;
    }
    render() {
        return (
                <ul>
                    {products.map((s) => {
                        return (
                            <Col xs={12} md={4}>
                            <div className="productBox">
                            <ProductImage source={s} />
                                <div className="prodDetail">
                                    <a href={s.links.www} className="prodTitle" target="_blank" rel="noopener noreferrer">{s.name.replace(/&quot;/g,'"').replace(/&amp;/g,"&")}</a>
                                    <li className="prodPrice">${this.handlePrice(s)}</li>
                                </div>
                            </div>
                            </Col>
                        )
                        })
                    }
                </ul>
        )
    }
}

export default Product;