import React from 'react';
import ReactDOM from 'react-dom';
import data from './products.json';
import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { Container, Row, Col } from 'react-bootstrap';
import './index.css';

const products = data.groups;
class App extends React.Component {
    render() {
        return (
            <div className="App">
            <header>
                WEST ELM
            </header>
                <ProductBoard />
            </div>
        );
    }
}

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

class ProductImage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { isOpen: false };

        this.toggleModal = this.toggleModal.bind(this);
      }
    
    toggleModal() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    

    render() {
        return (
        <div className="prodImage">
            <img onClick={this.toggleModal} 
            className="img-fluid toggle-button" 
            src={this.props.source.thumbnail.href} 
            alt={this.props.source.thumbnail.alt}/>
            <Modal 
            show={this.state.isOpen}
            onClose={this.toggleModal}
            source={this.props.source}>
        </Modal>
        </div>
        );
    }
}

class Modal extends React.Component {
    render() {
      // Render nothing if the "show" prop is false
      if(!this.props.show) {
        return null;
      }
      return (
        <div className="modalOverlay">
          <div className="modals">
            <div className="modalBox">
              <button className="close" onClick={this.props.onClose}>
                &times;
              </button>
              <div class="modalImages">
              <ProductCarousel source={this.props.source}/>
              </div>
              
            </div>
          </div>
        </div>
      );
    }
  }

  class ProductCarousel extends React.Component {
    render() {
        return (
            <Carousel>
                {this.props.source.images.map((s) => {
                    return (
                    <div>
                        <img 
                        src={s.href} 
                        alt={s.alt}/>
                    </div>
                    )
                })}
            </Carousel>
        );
    }
};
  
  Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
  };
  
ReactDOM.render(
    <App />,
    document.getElementById('root')
  );