
import { useState, useEffect } from 'react';

export const useMuscleVisibility = (initialMuscles = []) => {
    const [muscleVisibility, setMuscleVisibility] = useState({});
    const modelRef = { current: null };

    useEffect(() => {
        if (initialMuscles.length > 0) {
            const initialVisibility = {};
            initialMuscles.forEach(muscle => {
                initialVisibility[muscle] = true;
            });
            setMuscleVisibility(initialVisibility);
        }
    }, [initialMuscles]);

    const toggleVisibility = (muscleName) => {
        setMuscleVisibility(prev => {
            const newVal = !prev[muscleName];
            if (modelRef.current) {
                modelRef.current.traverse((obj) => {
                    if (obj.name === muscleName) {
                        obj.visible = newVal;
                    }
                });
            }
            return {
                ...prev,
                [muscleName]: newVal
            };
        });
    };

    const showAll = () => {
        setMuscleVisibility(prev => {
            const newVisibility = {};
            Object.keys(prev).forEach(muscle => {
                newVisibility[muscle] = true;
                if (modelRef.current) {
                    modelRef.current.traverse((obj) => {
                        if (obj.name === muscle) obj.visible = true;
                    });
                }
            });
            return newVisibility;
        });
    };

    const hideAll = () => {
        setMuscleVisibility(prev => {
            const newVisibility = {};
            Object.keys(prev).forEach(muscle => {
                newVisibility[muscle] = false;
                if (modelRef.current) {
                    modelRef.current.traverse((obj) => {
                        if (obj.name === muscle) obj.visible = false;
                    });
                }
            });
            return newVisibility;
        });
    };

    const generateMuscleListFromScene = (scene) => {
        const foundMuscles = new Set();
        scene.traverse((obj) => {
            if (obj.isMesh) {
                foundMuscles.add(obj.name);
            }
        });
        const muscleArray = Array.from(foundMuscles);
        const initialVisibility = {};
        muscleArray.forEach(muscle => {
            initialVisibility[muscle] = true;
        });
        setMuscleVisibility(initialVisibility);
        modelRef.current = scene; // set the reference once scene is ready
    };

    return {
        muscleVisibility,
        toggleVisibility,
        showAll,
        hideAll,
        generateMuscleListFromScene,
        modelRef // expose modelRef zodat andere components die kunnen instellen
    };
};