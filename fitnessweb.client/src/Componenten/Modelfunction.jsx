import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMuscle } from '../Componenten/MuscleContext';
import muscleGroups from '../data/muscleGroupsData';

export default function Model({ setHovered }) {
    const { scene } = useGLTF('/BWS.glb');
    const meshRef = useRef();
    const navigate = useNavigate();
    const contextMuscle = useMuscle();

   
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.traverse((obj) => {
                if (obj.isMesh) {
                    obj.material.emissive.set('black');
                }
            });
        }
    });

    return (
        <primitive
            object={scene}
            scale={1.5}
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
                e.stopPropagation();
                const clickedName = e.object.name;
                console.log('Clicked on:', clickedName);

                if (contextMuscle) {
                    
                    const groepEntry = Object.entries(muscleGroups).find(([groepNaam, groep]) =>
                        groep.muscles.includes(clickedName)
                    );

                    if (groepEntry) {
                        const [groepNaam] = groepEntry;
                        contextMuscle.selectMuscleGroup(groepNaam);
                        navigate('/spierpagina');
                    } else {
                       
                        contextMuscle.selectMuscle(clickedName);
                        navigate('/spierpagina');
                    }
                }

            }}

        />
    );
}