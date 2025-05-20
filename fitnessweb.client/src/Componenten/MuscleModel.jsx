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
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    return (
        <div className="hero-canvas-wrapper">
            <Canvas
                ref={canvasRef}
                camera={{ position: [0, 0, 1], fov: 60 }}
                onPointerMove={handlePointerMove}
                onPointerEnter={() => setIsMouseOverCanvas(true)}
                onPointerLeave={() => {
                    setIsMouseOverCanvas(false);
                    setHovered(null);
                }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight
                    position={[5, 5, 5]}
                    intensity={1.2}
                    castShadow // Enable shadows
                /><directionalLight
                    position={[-5, -5, -5]}
                    intensity={1}
                    castShadow // Enable shadows
                />
                <Model
                    ref={modelRef}
                    setHovered={setHovered}
                    onSceneLoaded={handleSceneReady}
                />
                <OrbitControls target={[0, 0, 0]}
                    rotation={[0, Math.PI, 0]}

                />
            </Canvas>

            {hovered && isMouseOverCanvas && (
                <div style={{
                    position: 'absolute',
                    left: `${mousePosition.x + 10}px`,
                    top: `${mousePosition.y + 10}px`,
                    background: 'rgba(0,0,0,0.8)',
                    padding: '6px 10px',
                    borderRadius: '6px',
                    color: 'white',
                    fontSize: '14px',
                    pointerEvents: 'none',
                    zIndex: 1000
                }}>
                    {hovered.name.replaceAll('_', ' ')}
                </div>
            )}
        </div>
    );
}