import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState, useRef } from 'react';
import Model from './Modelfunction';

export default function App() {
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

    
    const handlePointerEnterCanvas = () => {
        setIsMouseOverCanvas(true);
    };

   
    const handlePointerLeaveCanvas = () => {
        setIsMouseOverCanvas(false);
        setHovered(null); 
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          
            <Canvas
                ref={canvasRef} 
                camera={{ position: [0, 1.5, 3], fov: 55 }}
                onPointerMove={handlePointerMove}
                onPointerEnter={handlePointerEnterCanvas}
                onPointerLeave={handlePointerLeaveCanvas}
            >
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={0.6} />
                <directionalLight position={[-5, -5, -5]} intensity={0.6} />

                
                <Model setHovered={setHovered} />

            
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

            {hovered && isMouseOverCanvas && (
                <div
                    style={{
                        position: 'absolute',
                        left: `${mousePosition.x + 10}px`,
                        top: `${mousePosition.y + 10}px`,
                        background: 'white',
                        padding: '5px',
                        borderRadius: '5px',
                        color: 'black',
                        pointerEvents: 'none',
                        zIndex: 1000,
                    }}
                >
                    {hovered.name}
                </div>
            )}
        </div>
    );
}