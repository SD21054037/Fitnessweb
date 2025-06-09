// StepFiveSchemaReview.jsx
import React from 'react';
import './StepFiveSchemaReview.css';
import exercises from '../data/exercisesData';

const StepFiveSchemaReview = ({ selectedGroups, days, goal, level, selectedExercises, setSelectedExercises, onPrev, onSubmit }) => {
    const getExerciseDetails = (name) => exercises.find((ex) => ex.name === name);

    const getDefaultWarmup = (group) => {
        const warmupMap = {
            Chest: "Push-ups, band chest openers",
            Back: "Band rows, scapular retractions",
            Legs: "Bodyweight squats, glute bridges",
            Shoulders: "Arm swings, shoulder rolls",
            Arms: "Light curls & extensions",
            Core: "Plank holds, trunk rotations",
            Glutes: "Glute bridges, donkey kicks"
        };
        return warmupMap[group] || "Light cardio & mobility";
    };

    const getPrescription = (group) => {
        const largeGroups = ["Legs", "Back", "Chest"];
        const smallGroups = ["Arms", "Shoulders", "Core"];

        if (goal === "Bodybuilding") {
            return {
                sets: largeGroups.includes(group) ? 4 : smallGroups.includes(group) ? 2 : 3,
                reps: "6–12",
                rest: "2–3 min"
            };
        }
        if (goal === "Powerlifting") {
            return {
                sets: 3,
                reps: "3–6",
                rest: "2–5 min"
            };
        }
        if (goal === "Afvallen") {
            return {
                sets: 3,
                reps: "12–20",
                rest: "30–60s"
            };
        }
        return {
            sets: 3,
            reps: "10",
            rest: "60s"
        };
    };

    const getMaxPerDay = () => {
        if (goal === "Afvallen") return 6;
        if (days <= 3) return 5;
        if (goal === "Bodybuilding") return 4;
        if (goal === "Powerlifting") return 3;
        return 4;
    };

    const generateSplit = () => {
        const split = Array.from({ length: days }, () => []);
        const history = [];
        const maxPerDay = getMaxPerDay();

        const filtered = selectedExercises
            .map(getExerciseDetails)
            .filter(Boolean)
            .filter((ex) => ex.level === level || !ex.level)
            .filter((ex) => ex.goal === goal || !ex.goal);

        filtered.sort((a, b) => {
            const priorityScore = (ex) => {
                let score = 0;
                if (ex.muscles.secondary.length >= 2) score += 2; // compound
                if (goal === "Afvallen" && ex.execution?.toLowerCase().includes("circuit")) score += 1;
                if (goal === "Powerlifting" && ex.equipment === "barbell") score += 1;
                if (goal === "Bodybuilding" && ex.rest === "2–3 min") score += 1;
                return score;
            };
            return priorityScore(b) - priorityScore(a);
        });

        let dayIndex = 0;
        for (let ex of filtered) {
            const group = ex.muscles.group;
            let tries = 0;
            while (tries < days) {
                const targetDay = split[dayIndex];
                const previousDayGroup = split[(dayIndex - 1 + days) % days].map(e => e.muscles.group);
                const alreadyInDay = targetDay.find(e => e.muscles.group === group);

                if (
                    targetDay.length < maxPerDay &&
                    !alreadyInDay &&
                    !previousDayGroup.includes(group)
                ) {
                    targetDay.push(ex);
                    history.push({ day: dayIndex, group });
                    break;
                }
                dayIndex = (dayIndex + 1) % days;
                tries++;
            }
        }

        return split.map(dayList => {
            return dayList.sort((a, b) => a.muscles.group.localeCompare(b.muscles.group));
        });
    };

    const workoutSplit = generateSplit();

    return (
        <div className="step-five-container">
            <h2>Overzicht van je schema</h2>

            <div className="review-section">
                <h3>Spiergroepen</h3>
                <p>{selectedGroups.join(', ')}</p>
            </div>

            <div className="review-section">
                <h3>Trainingsdagen per week</h3>
                <p>{days}</p>
            </div>

            <div className="review-section">
                <h3>Doel</h3>
                <p>{goal}</p>
            </div>

            <div className="review-section">
                <h3>Niveau</h3>
                <p>{level}</p>
            </div>

            <div className="review-section">
                <h3>Workoutschema (gesplitst per dag)</h3>
                {workoutSplit.map((dayExercises, index) => (
                    <div key={index} className="day-block">
                        <h4>Dag {index + 1}</h4>
                        <p><em>Warming-up:</em> {getDefaultWarmup(dayExercises[0]?.muscles?.group)}</p>
                        <ul>
                            {dayExercises.map((ex) => {
                                const prescription = getPrescription(ex.muscles.group);
                                return (
                                    <li key={ex.name}>
                                        <strong>{ex.name}</strong> — {ex.muscles.group} <br />
                                        <small>Sets: {prescription.sets}, Reps: {prescription.reps}, Rust: {prescription.rest}</small>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="step-controls">
                <button onClick={onPrev}>Terug</button>
                <button onClick={onSubmit}>Bevestigen & Opslaan</button>
            </div>
        </div>
    );
};

export default StepFiveSchemaReview;
