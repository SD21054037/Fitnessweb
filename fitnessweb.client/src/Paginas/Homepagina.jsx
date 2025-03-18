import React from 'react';
import './Homepagina.css';

import Footer from '../Componenten/Footer';
import Musclemodel from '../Componenten/Modelviewer';

const Homepagina = () => {
    return (
        <div className="homepagina">
            
            <main className="main-content">
                <div className="model">
                    <h2>3D Model</h2>
                    <p>Select a muscle to learn more about it.</p>
                    <Musclemodel />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Homepagina;