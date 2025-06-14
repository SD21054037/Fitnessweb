import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef, useImperativeHandle, forwardRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMuscle } from '../../hooks/MuscleContext';
import { toast } from 'react-toastify';
import muscles from '../../data/musclesData';


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
                e.stopPropagation();
                const clickedName = e.object.name;

                const matchedMuscle = muscles.find(m => m.name === clickedName);

                if (matchedMuscle) {
                    navigate(`/spierpagina/${matchedMuscle.name}`);
                } else {
                    toast.info(`"${clickedName.replaceAll('_', ' ')}" is not available yet. We're working on it!`);
                }
            }}

        />
    );
});

Model.displayName = 'Model';
export default Model;