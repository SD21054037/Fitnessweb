import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef, useImperativeHandle, forwardRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMuscle } from '../hooks/MuscleContext';
import muscleGroups from '../data/muscleGroupsData';

const Model = forwardRef(({ setHovered, onSceneLoaded }, ref) => {
    const { scene } = useGLTF('/BWS.glb');
    const meshRef = useRef();
    const navigate = useNavigate();
    const contextMuscle = useMuscle();

    useEffect(() => {
        if (scene && onSceneLoaded) {
            onSceneLoaded(scene);
        }
    }, [scene, onSceneLoaded]);

    useImperativeHandle(ref, () => ({
        hideMuscle: (muscleName) => {
            meshRef.current?.traverse((obj) => {
                if (obj.name === muscleName) obj.visible = false;
            });
        },
        showMuscle: (muscleName) => {
            meshRef.current?.traverse((obj) => {
                if (obj.name === muscleName) obj.visible = true;
            });
        }
    }));

    return (
        <primitive
            object={scene}
            scale={0.5}
            position={[0, -0.5, 0]}
            ref={meshRef}
            onPointerOver={(e) => {
                e.stopPropagation();
                setHovered(e.object);
                if (e.object.material) {
                    e.object.material.color.set('lightcoral');
                }
            }}
            onPointerOut={(e) => {
                e.stopPropagation();
                setHovered(null);
                if (e.object.material) {
                    e.object.material.color.set('white');
                }
            }}
            onClick={(e) => {
                const clickedName = e.object.name;
                const groepEntry = Object.entries(muscleGroups).find(
                    ([_, groep]) => groep.muscles.includes(clickedName)
                );
                if (groepEntry && contextMuscle) {
                    const [groepNaam] = groepEntry;
                    contextMuscle.selectMuscle(clickedName);
                    contextMuscle.selectMuscleGroup(groepNaam);
                    navigate('/spierpagina');
                }
            }}
        />
    );
});

Model.displayName = 'Model';
export default Model;