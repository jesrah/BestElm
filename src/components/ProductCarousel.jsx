import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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

export default ProductCarousel;