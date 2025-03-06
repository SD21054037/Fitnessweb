import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useState, useRef } from 'react';
//import { useNavigate } from 'react-router-dom'; // If using React Router

function Model() {
    const { scene } = useGLTF('/upperbody2.glb');
    const [hovered, setHovered] = useState(null);
    const meshRef = useRef();
    

    useFrame(() => {
        if (hovered) {
            hovered.material.emissive.set('red'); 
        } else if (!hovered && meshRef.current) {
            meshRef.current.traverse((obj) => {
                if (obj.isMesh) {
                    obj.material.emissive.set('black'); 
                }
            });
        };
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
                //navigate(`/muscle/${e.object.name}`); // Navigate to the muscle's info page
            }}
        />
    );
}

export default function App() {
    return (
        <Canvas camera={{ position: [0, 2, 2], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, -5]} />
            <Model />
            <OrbitControls
                target={[2, 2, 0]}
                enableZoom={false}
                minDistance={1.5}
                maxDistance={3}
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2} 
            />
        </Canvas>

    );
}
