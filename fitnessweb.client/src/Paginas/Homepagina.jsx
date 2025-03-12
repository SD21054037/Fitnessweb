import React, { useState } from 'react';
import './Homepagina.css';
import HeaderComponent from '../Componenten/HeaderComponent';

import Musclemodel from '../Componenten/Modelviewer';
import LineModel from '../Componenten/LineModel';

const Homepagina = () => {
    const [selectedMuscle, setSelectedMuscle] = useState(null);

    //const handleMuscleSelect = (muscleInfo) => {
    //    setSelectedMuscle(muscleInfo);
    //};

    return (
        <div className="homepagina">
          
            <div className="spacer layer1"></div>
            <main className='main-content'>
                <div className='model'>
                    <h2>3D Model</h2>
                    <p>Select a muscle to learn more about it.</p>
                    <Musclemodel/>
                </div>
                <div className='model-uitleg'>
                    {selectedMuscle ? (
                        <div>
                            <h3>{selectedMuscle.name}</h3>
                            <p>{selectedMuscle.description}</p>
                           
                        </div>
                    ) : (
                        <p>Select a muscle to see more information.(werkt nog niet)</p>
                    )}
                </div>
            </main>
            <div className="spacer layer1 flip"></div>
            <footer>
            </footer>
        </div>
    );
};

export default Homepagina;
