import React, { useState } from 'react';
import './Spierpagina.css';
import HeaderComponent from '../Componenten/HeaderComponent';



const Spierpagina = () => {
    const [selectedMuscle, setSelectedMuscle] = useState(null);

    //const handleMuscleSelect = (muscleInfo) => {
    //    setSelectedMuscle(muscleInfo);
    //};

    return (
        <div className="Spierpagina">
            <HeaderComponent />
            <div className="spacer layer1"></div>
            <main className='main-content'>
                <div className='model'>
                    <h2>{selectedMuscle}</h2>
                   
                    
                </div>
                <div className='model-uitleg'>
                        <div>
                            <h3>{selectedMuscle.name}</h3>
                            <p>{selectedMuscle.description}</p>
                    
                        </div>
                </div>
            </main>
            <div className="spacer layer1 flip"></div>
            <footer>
            </footer>
        </div>
    );
};

export default Spierpagina;
