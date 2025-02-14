import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductList from "./components /ProductList";
import Cart from "./components /Cart";
import { Provider } from "react-redux";
import { store } from "./redux /store";



function App() {
    return (








        <
        Provider store = { store } >
        <
        Router >
        <
        div className = "p-4 bg-gray-200" >
        <
        nav className = "mb-4" >
        <
        Link to = "/"
        className = "mr-4 text-blue-600" > Home < /Link> <
        Link to = "/cart"
        className = "text-blue-600" > Cart < /Link> < /
        nav > <
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