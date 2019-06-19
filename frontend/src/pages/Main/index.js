import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes';
import React from 'react';
import "./styles.css";   


export default Main => {
    return(
        <BrowserRouter>
        <Routes/>
        </BrowserRouter>
    )
}
