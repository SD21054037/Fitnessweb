import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef, useImperativeHandle, forwardRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMuscle } from '../hooks/MuscleContext';
import muscleGroups from '../data/muscleGroupsData';
import { useMuscleVisibility } from '../hooks/useMuscleVisibility';

const Model = forwardRef(({ setHovered, onSceneLoaded }, ref) => {
    const { scene } = useGLTF('/BWS.glb');
    const meshRef = useRef();

    useEffect(() => {
        if (scene && onSceneLoaded) {
            onSceneLoaded(scene);
        }
    }, [scene, onSceneLoaded]);


    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.traverse((obj) => {
                if (obj.isMesh) {
                    obj.material.emissive.set('black');
                }
            });
        }
    });

    useImperativeHandle(ref, () => ({
        hideMuscle: (muscleName) => {
            if (meshRef.current) {
                meshRef.current.traverse((obj) => {
                    if (obj.name === muscleName) {
                        obj.visible = false;
                    }
                });
            }
        },
        showMuscle: (muscleName) => {
            if (meshRef.current) {
                meshRef.current.traverse((obj) => {
                    if (obj.name === muscleName) {
                        obj.visible = true;
                    }
                });
            }
        }
    }));

    return (
        <primitive
            object={scene}
            scale={1.5}
            ref={(node) => {
                meshRef.current = node;
            }}

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
                        contextMuscle.selectMuscle(clickedName);
                        contextMuscle.selectMuscleGroup(groepNaam);
                        navigate('/spierpagina');
                    } else {
                        console.warn("Spier niet gevonden in muscleGroups:", clickedName);
                    }
                }
            }}
        />
    );
});

Model.displayName = 'Model';
export default Model;
