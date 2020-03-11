import React from 'react';
import Modal from './Modal.jsx';

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

export default ProductImage;