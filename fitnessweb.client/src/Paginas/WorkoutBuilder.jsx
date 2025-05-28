import React, { useState } from 'react';
import StepOneSpiergroepen from '../Componenten/StepOneSpiergroepen';
import StepTwoSettings from '../Componenten/StepTwoSettings';
import StepThreePreferences from '../Componenten/StepThreePreferences';
import StepFourExerciseSelection from '../Componenten/StepFourExerciseSelection';
import StepFiveSchemaReview from '../Componenten/StepFiveSchemaReview';
import './WorkoutBuilder.css';

const WorkoutBuilder = () => {
    const [step, setStep] = useState(1);
    const [selectedGroups, setSelectedGroups] = useState([]);
    const [goal, setGoal] = useState("");
    const [level, setLevel] = useState("");
    const [days, setDays] = useState("");
    const [equipmentPreference, setEquipmentPreference] = useState("");
    const [selectedExercises, setSelectedExercises] = useState([]);
    const steps = ["Spiergroepen", "Instellingen", "Voorkeuren", "Oefeningen", "Schema"];


    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    return (
        <div className="workout-builder">
            <div className="step-indicator">
                {steps.map((label, index) => (
                    <div key={label} className={`step ${step === index + 1 ? "active" : ""}`}>
                        <span>{index + 1}</span> {label}
                    </div>
                ))}
            </div>

            {step === 1 && (
                <StepOneSpiergroepen
                    selectedGroups={selectedGroups}
                    setSelectedGroups={setSelectedGroups}
                    onNext={nextStep}
                />
            )}
            {step === 2 && (
                <StepTwoSettings
                    goal={goal}
                    setGoal={setGoal}
                    level={level}
                    setLevel={setLevel}
                    days={days}
                    setDays={setDays}
                    onNext={nextStep}
                    onPrev={prevStep}
                />
            )}
            {step === 3 && (
                <StepThreePreferences
                    equipmentPreference={equipmentPreference}
                    setEquipmentPreference={setEquipmentPreference}
                    onNext={nextStep}
                    onPrev={prevStep}
                />
            )}
            {step === 4 && (
                <StepFourExerciseSelection
                    selectedGroups={selectedGroups}
                    goal={goal}
                    level={level}
                    equipmentPreference={equipmentPreference}
                    selectedExercises={selectedExercises}
                    setSelectedExercises={setSelectedExercises}
                    onNext={nextStep}
                    onPrev={prevStep}
                />
            )}
            {step === 5 && (
                <StepFiveSchemaReview
                    selectedGroups={selectedGroups}
                    days={days}
                    goal={goal}
                    level={level}
                    selectedExercises={selectedExercises}
                    setSelectedExercises={setSelectedExercises}
                    onPrev={prevStep}
                    onSubmit={() => alert("Schema opgeslagen!")}
                />
            )}
        </div>
    );
};

export default WorkoutBuilder;
