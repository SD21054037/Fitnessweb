import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState, useRef } from 'react';
import Model from './Model';


export default function Musclemodel({ modelRef, handleSceneReady }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMouseOverCanvas, setIsMouseOverCanvas] = useState(false);
    const [hovered, setHovered] = useState(null);
    const canvasRef = useRef();



    const handlePointerMove = (e) => {
        if (canvasRef.current) {
            const rect = canvasRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setMousePosition({ x, y });
        }
    };

    const handlePointerEnterCanvas = () => setIsMouseOverCanvas(true);
    const handlePointerLeaveCanvas = () => {
        setIsMouseOverCanvas(false);
        setHovered(null);
    };

    return (
        <div className = "hero-canvas-wrapper">


           
 

            <Canvas
                ref={canvasRef}
                camera={{ position: [0, 3, 3], fov: 45 }}
                onPointerMove={handlePointerMove}
                onPointerEnter={handlePointerEnterCanvas}
                onPointerLeave={handlePointerLeaveCanvas}
            >
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={0.6} />
                <directionalLight position={[-5, -5, -5]} intensity={0.6} />

                <Model
                    ref={modelRef}
                    setHovered={setHovered}
                    onSceneLoaded={handleSceneReady}
                />


                <OrbitControls
                    target={[1.7, 1.3, 0]}
                    enableZoom={true}
                    minDistance={2}
                    maxDistance={4}
                    enablePan={true}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
            </Canvas>

            {hovered && isMouseOverCanvas && (
                <div
                    style={{
                        position: 'absolute',
                        left: `${mousePosition.x + 10}px`,
                        top: `${mousePosition.y + 10}px`,
                        background: 'rgba(0,0,0,0.8)',
                        padding: '6px 10px',
                        borderRadius: '6px',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        pointerEvents: 'none',
                        zIndex: 1000,
                        whiteSpace: 'nowrap',
                    }}
                >
                    {hovered.name.replaceAll('_', ' ')}
                </div>
            )}

        </div>
    );
}
