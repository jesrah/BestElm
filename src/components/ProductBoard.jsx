import React from 'react';
import Product from './Product.jsx';
import { Container, Row } from 'react-bootstrap';

class ProductBoard extends React.Component {
    render() {
        return (
            <Container>
                <Row className="board">
                        <Product />
                </Row>
            </Container>
        );
    }
}

export default ProductBoard;