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

    useEffect(() => {
        if (contextMuscle) {
            const spier = muscles.find(m => m.name === contextMuscle);
            setSelectedMuscle(spier);
        }
    }, [contextMuscle]);
    console.log(selectedMuscleGroup);
    if (!selectedMuscleGroup) {
        return <p>Select a muscle group from the homepage.</p>;
    }

    const group = muscleGroups[selectedMuscleGroup];
    const spierenInGroep = group.muscles.map(name => muscles.find(m => m.name === name));

    return (
        <div className="Spierpagina">
            <main className='SPmain-content'>
                <h1>{group.name}</h1>

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
