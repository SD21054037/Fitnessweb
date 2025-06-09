import React from 'react';
import './SpiergroepSectie.css';
import MuscleGroupModel from '../../Componenten/Models/MuscleGroupModel';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState } from 'react';

const SpiergroepSectie = ({ group, spieren, selectedMuscle, onSelectMuscle, visibleBones }) => {
    const [showSkeleton, setShowSkeleton] = useState(true);

    return (
        <section className="spiergroep-sectie card">
            <h2 className="spiergroep-titel">{group.name}</h2>
            <div className="spiergroep-content">
                <div className="model-container">
                    <MuscleGroupModel
                        highlightSpieren={spieren.map(s => s.name)}
                        selected={selectedMuscle?.name}
                        onClickSpier={onSelectMuscle}
                        visibleBones={showSkeleton ? (visibleBones || []) : []}
                    />
                    
                </div>
                <div className="groep-info">
                    <h3>About the {group.name}</h3>
                    <p className="groep-description">
                        {group.description}
                    </p>

                    <h4>Muscles in this group:</h4>
                    <ul className="spier-lijst">
                        {spieren.map(spier => (
                            <li
                                key={spier.name}
                                className={`spier-item ${selectedMuscle?.name === spier.name ? 'selected' : ''}`}
                                onClick={() => onSelectMuscle(spier)}
                            >
                                <span className="spier-naam">{spier.name}</span>
                                {spier.shortDescription && (
                                    <span className="spier-info">{spier.shortDescription}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => setShowSkeleton(prev => !prev)}
                        style={{
                            backgroundColor: '#007B8A',
                            color: 'white',
                            border: 'none',
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            marginBottom: '1rem',
                            cursor: 'pointer'
                        }}
                    >
                        {showSkeleton ? 'Hide Skeleton' : 'Show Skeleton'}
                    </button>

                </div>
            </div>
        </section>
    );
};

export default SpiergroepSectie;
