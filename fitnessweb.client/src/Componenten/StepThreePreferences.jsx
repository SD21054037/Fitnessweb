// StepThreePreferences.jsx
import React, { useState } from 'react';
import './StepThreePreferences.css';

const StepThreePreferences = ({ equipmentPreference, setEquipmentPreference, onNext, onPrev }) => {
    return (
        <div className="step-three-container">
            <h2>Extra voorkeuren</h2>

            <div className="form-group">
                <label>Voorkeursmateriaal:</label>
                <select value={equipmentPreference} onChange={(e) => setEquipmentPreference(e.target.value)}>
                    <option value="">Geen voorkeur</option>
                    <option value="bodyweight">Bodyweight</option>
                    <option value="dumbbell">Dumbbell</option>
                    <option value="machine">Machine</option>
                </select>
            </div>

            <div className="step-controls">
                <button onClick={onPrev}>Terug</button>
                <button onClick={onNext}>Volgende</button>
            </div>
        </div>
    );
};

export default StepThreePreferences;
