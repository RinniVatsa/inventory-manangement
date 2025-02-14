import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductList from "./components /ProductList"; // Fixed import path
import Cart from "./components /Cart"; // Fixed import path
import { Provider } from "react-redux";
import {
    store
} from "./redux /store"; // Fixed import path

function App() {
    return ( <
        Provider store = { store } >
        <
        Router >
        <
        div className = "p-4 bg-gray-200" > { /* Navbar */ } <
        nav className = "mb-4 flex space-x-4" >
        <
        Link to = "/"
        className = "text-blue-600 font-semibold" > Home < /Link> <
        Link to = "/cart"
        className = "text-blue-600 font-semibold" > Cart < /Link> < /
        nav >

        { /* Routes */ } <
        Routes >
        <
        Route path = "/"
        element = { < ProductList / > }
        /> <
        Route path = "/cart"
        element = { < Cart / > }
        /> < /
        Routes > <
        /div> < /
        Router > <
        /Provider>
    );
}

export default App;