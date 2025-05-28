import React from 'react';
import './StepOneSpiergroepen.css'; 
import muscleGroups from '../data/muscleGroupsData';
import MusclePreview from '../Componenten/MusclePreview';
import { useState } from 'react';
import { useEffect } from 'react';

const StepOneSpiergroepen = ({ selectedGroups, setSelectedGroups, onNext }) => {

    
    const toggleGroup = (name) => {
        setSelectedGroups((prev) =>
            prev.includes(name) ? prev.filter((g) => g !== name) : [...prev, name]
        );
        
    };

   

    useEffect(() => {
        console.log("Selected groups updated:", selectedGroups);
    }, [selectedGroups]);

   
  

    return (
        <div className="step-one-container">
            <div className="grid-side">
                <h2>Explore Muscle Groups</h2>
                <div className="group-grid">
                    {[
                        { name: 'Chest', model: '/chest.glb', position: [0, -1.5, 0] },
                        { name: 'Back', model: '/back.glb', position: [0, -1.4, 0] },
                        { name: 'Legs', model: '/legs.glb', position: [0, -0.5, 0], scale: 0.7 },
                        { name: 'Schoulders', model: '/schoulders.glb', position: [0, -1.5, 0] },
                        { name: 'Arms', model: '/arms.glb', position: [0, -1.2, 0] },
                        { name: 'Core', model: '/core.glb', position: [0, -1.4, 0] }
                    ].map((group) => (
                        <div
                            key={group.name}
                            className={`group-card ${selectedGroups.includes(group.name) ? 'selected' : ''}`}
                            onClick={() => toggleGroup(group.name)}
                        >
                            <MusclePreview
                                modelPath={group.model}
                                scale={group.scale}
                                position={group.position}

                            />
                            <p>{group.name}</p>
                        </div>
                    ))}
                </div>

                <button onClick={onNext} disabled={selectedGroups.length === 0}>
                    Volgende
                </button>
            </div>
        </div>
    );
};

export default StepOneSpiergroepen;
