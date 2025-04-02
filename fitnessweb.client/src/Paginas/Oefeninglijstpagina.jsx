import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import exercises from '../data/exercisesData'; // assuming you'll extract all exercises here
import './Oefeninglijstpagina.css';

const ExerciseListPage = () => {
    const [search, setSearch] = useState('');
    const [filteredMuscle, setFilteredMuscle] = useState('');

    const filteredExercises = exercises.filter(ex => {
        const matchesSearch = ex.name.toLowerCase().includes(search.toLowerCase());
        const matchesMuscle = filteredMuscle
            ? ex.muscles.primary.includes(filteredMuscle) || ex.muscles.secondary.includes(filteredMuscle)
            : true;
        return matchesSearch && matchesMuscle;
    });

    const allMuscles = Array.from(new Set(exercises.flatMap(e => [...e.muscles.primary, ...e.muscles.secondary])));

    return (
        <div className="exercise-list-page">
            <h1>All Exercises</h1>

            <div className="filters">
                <input
                    type="text"
                    placeholder="Search exercises..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select value={filteredMuscle} onChange={(e) => setFilteredMuscle(e.target.value)}>
                    <option value="">All muscles</option>
                    {allMuscles.map(muscle => (
                        <option key={muscle} value={muscle}>{muscle}</option>
                    ))}
                </select>
            </div>

            <ul className="exercise-list">
                {filteredExercises.map(ex => (
                    <li key={ex.name} className="exercise-item">
                        <Link to={`/exercises/${encodeURIComponent(ex.name)}`} className="exercise-link">
                            <h3>{ex.name}</h3>
                            <p>{ex.intro}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExerciseListPage;