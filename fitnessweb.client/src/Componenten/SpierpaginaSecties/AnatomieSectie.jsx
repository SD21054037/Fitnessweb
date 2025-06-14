import React from 'react';
import './AnatomieSectie.css';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { highlightTerms } from '../../utils/highlightTerms';
import MuscleAnimation from '../Models/MuscleAnimation';
import { Button } from 'antd';

const AnatomieSectie = ({ selectedMuscle }) => {
    const [currentView, setCurrentView] = React.useState('origin'); 

    if (!selectedMuscle || !selectedMuscle.anatomy) return null;

    return (
        <section className="card">
            <div className="anatomie-tekstblok">
                <h3>{selectedMuscle.displayName}</h3>

                <p>
                    {highlightTerms(`The ${selectedMuscle.displayName} is located in the ${selectedMuscle.anatomy.location?.toLowerCase() ?? 'body'} and plays an important role in ${selectedMuscle.anatomy.function?.toLowerCase() ?? 'movement'}. This muscle originates from the ${selectedMuscle.anatomy.origin?.toLowerCase()}, and inserts into the ${selectedMuscle.anatomy.insertion?.toLowerCase()}. Because of this, it contributes to movements such as ${selectedMuscle.anatomy.function?.toLowerCase()}.

                    It is innervated by the ${selectedMuscle.anatomy.innervation} and receives blood supply from the ${selectedMuscle.anatomy.bloodSupply}. While performing its function, this muscle often works together with synergist muscles such as ${selectedMuscle.anatomy.synergists}, while antagonist muscles like ${selectedMuscle.anatomy.antagonists} perform the opposite action. This balance between muscles ensures controlled and efficient movement.`)}
                </p>
            </div>

            <div className="anatomie-animatie-placeholder">
                <div className="anatomie-animatie-header">
                    <div className="anatomie-animatie-header-text">
                        <h4>3D Anatomie</h4>
                        <p>Current view: {currentView}</p>
                 </div>
                    <Button  variant="ghost" onClick={() => setCurrentView("origin")}>
                        origin
                    </Button>
                    <Button  variant="ghost" onClick={() => setCurrentView("insertion")}>
                       insertion
                    </Button>
                    <Button  variant="ghost" onClick={() =>  setCurrentView("animation")}>
                        animation
                    </Button>
                    
                    
                </div>
                {/*temporary. will do it in canvas itself later on but for now this ig*/}
                <div className="anatomie-animatie-content">
                    {currentView === 'origin' && (
                        <img src={selectedMuscle.anatomy.originImg} alt={`${selectedMuscle.displayName} origin`} />
                    )}
                    {currentView === 'insertion' && (
                        <img src={selectedMuscle.anatomy.insertionImg} alt={`${selectedMuscle.displayName} insertion`} />
                    )}
                    {currentView === 'animation' && (
                        <MuscleAnimation AnimationPath={selectedMuscle.anatomy.Animation}/>
                    )}
                </div>

                
            </div>
        </section>
    );
};

export default AnatomieSectie;
