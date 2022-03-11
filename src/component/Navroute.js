import React from 'react';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Agence from '../pages/Agence';
import Contact from '../pages/Contact';
import Home from './Home';



const Navroute = () => {
    return (
        <div>
          
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path="/agence" element={<Agence/>} />
                    <Route path="/contact" element={<Contact/> } />
                </Routes>
        </div>
    );
};

export default Navroute;