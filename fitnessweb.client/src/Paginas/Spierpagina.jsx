import React, { useState, useEffect } from 'react';
import './Spierpagina.css';

import { useMuscle } from '../Componenten/MuscleContext';
import Footer from '../Componenten/Footer';
import muscles from '../data/musclesData';
import muscleGroups from '../data/muscleGroupsData';

import SpiergroepSectie from '../SpierpaginaSecties/SpiergroepSectie';
import AnatomySectie from '../SpierpaginaSecties/AnatomieSectie';
import BlessuresSectie from '../SpierpaginaSecties/BlessuresSectie';
import OefeningenSectie from '../SpierpaginaSecties/OefeningenSectie';

const Spierpagina = () => {
    const { selectedMuscle: contextMuscle, selectedMuscleGroup } = useMuscle();
    const [selectedMuscle, setSelectedMuscle] = useState(null);
    console.log(selectedMuscle);
    console.log(selectedMuscleGroup);

    useEffect(() => {
        if (contextMuscle) {
            const spier = muscles.find(m => m.name === contextMuscle);
            setSelectedMuscle(spier);
        }
    }, [contextMuscle]);

    useEffect(() => {
        // fallback voor muscleGroup als het er nog niet is
        if (!selectedMuscleGroup && contextMuscle) {
            const group = Object.values(muscleGroups).find(g =>
                g.muscles.includes(contextMuscle)
            );
            if (group) {
                // Optional: als je selectMuscleGroup uit context wil gebruiken
                // selectMuscleGroup(group.name); 
                // Of tijdelijke state in component
                setSelectedMuscleGroup(group.name);
            }
        }
    }, [contextMuscle, selectedMuscleGroup]);


    const group = muscleGroups[selectedMuscleGroup];
    const spierenInGroep = group.muscles.map(name => muscles.find(m => m.name === name));

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
            <Footer />
        </div>
    );
};

export default Spierpagina;
