import React from 'react';
import ProductBoard from './ProductBoard.jsx';

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

export default App;