import React, { useState, useEffect } from 'react';
import './Spierpagina.css';

import { useMuscle } from '../hooks/MuscleContext';
import Footer from '../Componenten/Footer';
import muscles from '../data/musclesData';
import muscleGroups from '../data/muscleGroupsData';

import SpiergroepSectie from '../SpierpaginaSecties/SpiergroepSectie';
import AnatomySectie from '../SpierpaginaSecties/AnatomieSectie';
import BlessuresSectie from '../SpierpaginaSecties/BlessuresSectie';
import OefeningenSectie from '../SpierpaginaSecties/OefeningenSectie';

const Spierpagina = () => {
   

    const [selectedMuscle, setSelectedMuscle] = useState(null);
    const {
        selectedMuscle: contextMuscle,
        selectedMuscleGroup,
        selectMuscleGroup,
    } = useMuscle();
    useEffect(() => {
        if (contextMuscle) {
            const spier = muscles.find(m => m.name === contextMuscle);
            setSelectedMuscle(spier);
        }
    }, [contextMuscle]);

    useEffect(() => {
        if (!selectedMuscleGroup && contextMuscle) {
            const group = Object.entries(muscleGroups).find(([_, g]) =>
                g.muscles.includes(contextMuscle)
            );
            if (group) {
                selectMuscleGroup(group[0]);
            }
        }
    }, [contextMuscle, selectedMuscleGroup, selectMuscleGroup]);

    const group = muscleGroups[selectedMuscleGroup];
    const spierenInGroep = group?.muscles.map(name => muscles.find(m => m.name === name)) || [];

    return (
        <div className="Spierpagina">
            <main className='SPmain-content'>
                <SpiergroepSectie
                    group={group}
                    spieren={spierenInGroep}
                    selectedMuscle={selectedMuscle}
                    onSelectMuscle={setSelectedMuscle}
                />

                {selectedMuscle && (
                    <>
                        
                        <AnatomySectie selectedMuscle={selectedMuscle} />
                        <BlessuresSectie selectedMuscle={selectedMuscle} />
                        <OefeningenSectie selectedMuscle={selectedMuscle} />
                    </>
                )}
            </main>
          
        </div>
    );
};

export default Spierpagina;
