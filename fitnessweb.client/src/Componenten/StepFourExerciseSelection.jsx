import React, { useState } from 'react';
import './StepFourExerciseSelection.css';
import exercises from '../data/exercisesData';

const StepFourExerciseSelection = ({ selectedGroups, goal, level, equipmentPreference, selectedExercises, setSelectedExercises, onNext, onPrev }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const isRelevant = (exercise) => {
        const matchesMuscle = selectedGroups.some(group => exercise.muscles.group.includes(group));
        const matchesLevel = !exercise.level || exercise.level === level;
        const matchesGoal = !exercise.goal || exercise.goal === goal;
        const matchesSearch = exercise.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesEquipment = !equipmentPreference || exercise.equipment?.toLowerCase() === equipmentPreference.toLowerCase();
        return matchesMuscle && matchesLevel && matchesGoal && matchesSearch && matchesEquipment;
    };

    const toggleExercise = (name) => {
        setSelectedExercises((prev) =>
            prev.includes(name) ? prev.filter((ex) => ex !== name) : [...prev, name]
        );
    };

    return (
        <div className="step-four-container">
            <h2>Kies je oefeningen</h2>

            <input
                type="text"
                placeholder="Zoek op naam"
                className="exercise-search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div className="exercise-list">
                {exercises.filter(isRelevant).map((exercise) => (
                    <div
                        key={exercise.name}
                        className={`exercise-card ${selectedExercises.includes(exercise.name) ? 'selected' : ''}`}
                        onClick={() => toggleExercise(exercise.name)}
                    >
                        <h3>{exercise.name}</h3>
                        <p><strong>Spiergroep:</strong> {exercise.muscles.group}</p>
                        <p><strong>Intro:</strong> {exercise.intro}</p>
                        <p><strong>Materiaal:</strong> {exercise.equipment || 'onbekend'}</p>
                    </div>
                ))}
            </div>

            <div className="step-controls">
                <button onClick={onPrev}>Terug</button>
                <button onClick={onNext} disabled={selectedExercises.length === 0}>Volgende</button>
            </div>
        </div>
    );
};

export default StepFourExerciseSelection;
