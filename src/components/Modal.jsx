import React from 'react';
import PropTypes from 'prop-types';
import ProductCarousel from './ProductCarousel.jsx';

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

  Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
  };

export default Modal;