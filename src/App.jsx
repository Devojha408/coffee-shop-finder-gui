import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/pages/Home';
import CoffeeShop from './Components/pages/CoffeeShop';
import GlobalStyle from './Components/styles/GlobalStyle';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coffeeshop/:id" element={<CoffeeShop />} />
            </Routes>
        </Router>
    );
}

export default App;
