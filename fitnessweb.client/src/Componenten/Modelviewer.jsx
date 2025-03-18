import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useMuscle } from '../Componenten/MuscleContext';
function Model() {
    const { scene } = useGLTF('/BWS.glb');
    const [hovered, setHovered] = useState(null);
    const meshRef = useRef();
    const navigate = useNavigate();
    const contextMuscle = useMuscle(); 

    useFrame(() => {
        if (hovered) {
            hovered.material.emissive.set('red');
        } else if (!hovered && meshRef.current) {
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
                if (e.object.material) {
                    e.object.material.color.set('red');
                }
            }}

            onPointerOut={(e) => {
                e.stopPropagation();
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


export default function App() {
    return (
        <Canvas camera={{ position: [0, 1.5, 3], fov: 55 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.6} />
            <directionalLight position={[-5, -5, -5]} intensity={0.6} />
            <Model />
            <OrbitControls
                target={[1.7, 1.5, 0]}  
                enableZoom={true}
                minDistance={2}
                maxDistance={4}
                enablePan={true}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
        </Canvas>


    );
}
