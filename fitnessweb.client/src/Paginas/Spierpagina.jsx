import React, { useState, useEffect } from 'react';
import './Spierpagina.css';
import { useParams } from 'react-router-dom';
import muscles from '../data/musclesData';
import muscleGroups from '../data/muscleGroupsData';
import { useNavigate } from 'react-router-dom';
import SpiergroepSectie from '../Componenten/SpierpaginaSecties/SpiergroepSectie';
import AnatomySectie from '../Componenten/SpierpaginaSecties/AnatomieSectie';
import BlessuresSectie from '../Componenten/SpierpaginaSecties/BlessuresSectie';
import OefeningenSectie from '../Componenten/SpierpaginaSecties/OefeningenSectie';

const Spierpagina = () => {
    const { spiernaam } = useParams();
    const [selectedMuscle, setSelectedMuscle] = useState(null);
    const [group, setGroup] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (spiernaam) {
            const spier = muscles.find(m => m.name.toLowerCase() === spiernaam.toLowerCase());
            setSelectedMuscle(spier);

            
            const groupEntry = Object.entries(muscleGroups).find(([_, g]) =>
                g.muscles.includes(spiernaam)
            );
            if (groupEntry) {
                setGroup(groupEntry[1]);
            } else {
                setGroup(null);
            }
        } else {
            setSelectedMuscle(null);
            setGroup(null);
        }
    }, [spiernaam]);

    const spierenInGroep = group?.muscles.map(name =>
        muscles.find(m => m.name === name)
    ) || [];

    return (
        <div className="Spierpagina">
            <main className='SPmain-content'>

                {group && (
                    <SpiergroepSectie
                        group={group}
                        spieren={spierenInGroep}
                        selectedMuscle={selectedMuscle}
                        onSelectMuscle={(muscle) => {
                            navigate(`/spierpagina/${muscle.name}`);

                        }}
                        visibleBones={group.bones || []}
                           
                        
                    />
                )}

                {selectedMuscle ? (
                    <>
                        <AnatomySectie selectedMuscle={selectedMuscle} />
                        <BlessuresSectie selectedMuscle={selectedMuscle} />
                        <OefeningenSectie selectedMuscle={selectedMuscle} />
                    </>
                ) : (
                    <p>Spier niet gevonden of niet geselecteerd.</p>
                )}
            </main>
        </div>
    );
};

export default Spierpagina;
