
import React from 'react';
import './StepTwoSettings.css';

const StepTwoSettings = ({ goal, setGoal, level, setLevel, days, setDays, onNext, onPrev }) => {
    return (
        <div className="step-two-container">
            <h2>Stel je voorkeuren in</h2>

            <div className="form-group">
                <label>Doel:</label>
                <select value={goal} onChange={(e) => setGoal(e.target.value)}>
                    <option value="">Selecteer een doel</option>
                    <option value="Bodybuilding">Bodybuilding (Spiermassa)</option>
                    <option value="Powerlifting">Powerlifting (Kracht)</option>
                    <option value="Afvallen">Afvallen (Vetverbranding)</option>
                </select>
            </div>

            <div className="form-group">
                <label>Niveau:</label>
                <select value={level} onChange={(e) => setLevel(e.target.value)}>
                    <option value="">Selecteer je niveau</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Gemiddeld">Gemiddeld</option>
                    <option value="Gevorderd">Gevorderd</option>
                </select>
            </div>

            <div className="form-group">
                <label>Aantal trainingsdagen per week:</label>
                <select value={days} onChange={(e) => setDays(Number(e.target.value))}>
                    <option value="">Selecteer aantal dagen</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                </select>
            </div>

            <div className="step-controls">
                <button onClick={onPrev}>Terug</button>
                <button onClick={onNext} disabled={!goal || !level || !days}>Volgende</button>
            </div>
        </div>
    );
};

export default StepTwoSettings;
