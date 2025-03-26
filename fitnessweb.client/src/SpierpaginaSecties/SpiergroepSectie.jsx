import React from 'react';
import '../Paginas/Spierpagina.css';
import MuscleGroupModel from '../Componenten/MuscleGroupModel';

const SpiergroepSectie = ({ group, spieren, selectedMuscle, onSelectMuscle }) => {
    return (
        <div className="spiergroep-sectie">
            <div className="model-container">
                <MuscleGroupModel
                    highlightSpieren={spieren.map(s => s.name)}
                    selected={selectedMuscle?.name}
                    onClickSpier={onSelectMuscle}
                />
            </div>
            <div className="groep-info">
                <h3>About the {group.name}</h3>
                <p>{group.description}</p>
                <h4>Muscles in this group:</h4>
                <ul>
                    {spieren.map(spier => (
                        <li
                            key={spier.name}
                            onClick={() => onSelectMuscle(spier)}
                            style={{
                                cursor: 'pointer',
                                fontWeight: selectedMuscle?.name === spier.name ? 'bold' : 'normal',
                            }}
                        >
                            {spier.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SpiergroepSectie;
