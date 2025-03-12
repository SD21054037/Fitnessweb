import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepagina from './Paginas/Homepagina';
import Spierpagina from './Paginas/Spierpagina';
import HeaderComponent from './Componenten/HeaderComponent';



function App() {
   

    return (
        <Router>
            <HeaderComponent />
            <Routes>
                <Route path="/" element={<Homepagina />} />
                <Route path="/spierpagina" element={<Spierpagina  />} />
            </Routes>
        </Router>
    );
}

export default App;

