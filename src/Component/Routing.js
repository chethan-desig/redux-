import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../Container/Home';

const Routing=()=>{
    return(
        <BrowserRouter>
        <Header/>
        <Route exact path="/" component={Home}></Route>
        <Footer/>
        </BrowserRouter>
    )
}
export default Routing