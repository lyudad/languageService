import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import 'antd/dist/antd.css';
import Categories from './Pages/Categories'

import {Home} from "./Pages/Home"
// import './styles.js';

// import {ProductList} from "Pages/ProductList/ProductList";
// import {ProductDetails} from "Pages/ProductDetails"


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/categories" component={Categories} />
            </Switch>
        </Router>
    );
}

export default App;


