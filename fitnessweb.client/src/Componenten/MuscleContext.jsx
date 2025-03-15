import React, { createContext, useContext, useState } from 'react';

const MuscleContext = createContext();

export function useMuscle() {
    return useContext(MuscleContext);
}

export const MuscleProvider = ({ children }) => {
    const [selectedMuscle, setSelectedMuscle] = useState(null);

    const selectMuscle = (muscle) => {
        setSelectedMuscle(muscle);
    };

    return (
        <MuscleContext.Provider value={{ selectedMuscle, selectMuscle }}>
            {children}
        </MuscleContext.Provider>
    );
};
