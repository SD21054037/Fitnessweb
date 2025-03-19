import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMuscle } from '../Componenten/MuscleContext';

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
                console.log('Clicked on:', e.object.name);

                if (contextMuscle && contextMuscle.selectMuscle) {
                    contextMuscle.selectMuscle(e.object.name);
                    navigate(`/spierpagina/`);
                } else {
                    console.error("Muscle is not available!");
                }
            }}
        />
    );
}