import React, { createContext, useContext, useState } from 'react';

const MuscleContext = createContext();

export const MuscleProvider = ({ children }) => {
    const [selectedMuscle, setSelectedMuscle] = useState(null);
    const [selectedMuscleGroup, setSelectedMuscleGroup] = useState(null);

    const selectMuscle = (muscle) => {
        setSelectedMuscle(muscle);
        setSelectedMuscleGroup(null); // reset group when individual is selected
    };

    const selectMuscleGroup = (group) => {
        setSelectedMuscleGroup(group);
        setSelectedMuscle(null); // reset individual when group is selected
    };

    const clearSelection = () => {
        setSelectedMuscle(null);
        setSelectedMuscleGroup(null);
    };

    return (
        <MuscleContext.Provider
            value={{
                selectedMuscle,
                selectMuscle,
                selectedMuscleGroup,
                selectMuscleGroup,
                clearSelection,
            }}
        >
            {children}
        </MuscleContext.Provider>
    );
};

export const useMuscle = () => useContext(MuscleContext);
