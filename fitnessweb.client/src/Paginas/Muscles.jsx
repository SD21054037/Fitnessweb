import { useNavigate } from 'react-router-dom';
import muscleGroups from '../data/muscleGroupsData';
import { useMuscle } from '../hooks/MuscleContext';
import Musclemodel from '../Componenten/MuscleModel';
import { useRef, useState } from 'react';
import './Muscles.css'; // Import component-specific CSS

export default function Muscles() {
    const allMuscles = muscleGroups.flatMap((group) => group.muscles);
    const contextMuscle = useMuscle();
    const navigate = useNavigate();
    const modelRef = useRef();
    const [searchTerm, setSearchTerm] = useState('');
    const [activeGroup, setActiveGroup] = useState('All');

    const filteredMuscles = activeGroup === 'All'
        ? allMuscles.filter(muscle =>
            muscle.toLowerCase().replaceAll('_', ' ').includes(searchTerm.toLowerCase()))
        : muscleGroups.find(g => g.name === activeGroup)?.muscles.filter(muscle =>
            muscle.toLowerCase().replaceAll('_', ' ').includes(searchTerm.toLowerCase())) || [];

    const handleMuscleClick = (clickedName) => {
        if (contextMuscle) {
            const groepEntry = Object.entries(muscleGroups).find(([groepNaam, groep]) =>
                groep.muscles.includes(clickedName)
            );

            if (groepEntry) {
                const [groepNaam] = groepEntry;
                contextMuscle.selectMuscle(clickedName);
                contextMuscle.selectMuscleGroup(groepNaam);
                navigate('/spierpagina');
            }
        }
    };

    return (
        <div className="muscles-explorer">
         

            <div className="muscles-layout">
                <div className="model-container">
                    <div className="model-header">
                        <h2>Interactive Anatomy Model</h2>
                        <div className="model-tips">
                            <span className="tip">Click on muscles</span>
                            <span className="tip">Drag to rotate</span>
                            <span className="tip">Scroll to zoom</span>
                        </div>
                    </div>
                    <div className="model-viewer">
                        <Musclemodel modelRef={modelRef} />
                    </div>
                </div>

               
                <div className="muscles-list-container">
                    <div className="search-section">
                        <h2>Muscle Directory</h2>
                        <div className="search-controls">
                            <div className="search-box">
                                <svg className="search-icon" viewBox="0 0 24 24">
                                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search muscles..."
                                    className="search-input"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                {searchTerm && (
                                    <button
                                        className="clear-search"
                                        onClick={() => setSearchTerm('')}
                                    >
                                        Clear
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="group-tabs">
                            <button
                                className={`group-tab ${activeGroup === 'All' ? 'active' : ''}`}
                                onClick={() => setActiveGroup('All')}
                            >
                                All Muscles
                            </button>
                            {muscleGroups.map(group => (
                                <button
                                    key={group.name}
                                    className={`group-tab ${activeGroup === group.name ? 'active' : ''}`}
                                    onClick={() => setActiveGroup(group.name)}
                                >
                                    {group.name}
                                </button>
                            ))}
                        </div>

                        <div className="muscles-grid">
                            {filteredMuscles.map((muscle) => (
                                <button
                                    key={muscle}
                                    className="muscle-button"
                                    onClick={() => handleMuscleClick(muscle)}
                                >
                                    {muscle.replaceAll('_', ' ')}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}