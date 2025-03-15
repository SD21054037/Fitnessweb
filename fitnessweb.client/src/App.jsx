import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepagina from './Paginas/Homepagina';
import Spierpagina from './Paginas/Spierpagina';
import HeaderComponent from './Componenten/HeaderComponent';
import { MuscleProvider } from './Componenten/MuscleContext'; 



function App() {
   

    return (
        <Router>
            <MuscleProvider>
            <HeaderComponent />
            <Routes>
                <Route path="/" element={<Homepagina />} />
                <Route path="/spierpagina" element={<Spierpagina  />} />
                </Routes>
            </MuscleProvider>
        </Router>
    );
}

export default App;

