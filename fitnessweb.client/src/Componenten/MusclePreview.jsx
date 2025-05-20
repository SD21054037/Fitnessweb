import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import React, { Suspense } from 'react';
import { Bounds } from '@react-three/drei';

function Model({ path, scale, position }) {
    const { scene } = useGLTF(path);
    return <primitive object={scene} scale={scale} position={position} />;
}

const MusclePreview = ({ modelPath, position, scale}) => {
    return (
        <div className="preview-container">
            <Canvas camera={{ position: [0, 0, 2], fov: 25 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[2, 2, 2]} intensity={0.8} />
                <directionalLight position={[-2, -2, -2]} intensity={0.8} />
                <Suspense fallback={null}>
                    <Model path={modelPath} scale={scale} position={position} />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
            </Canvas>
        </div>
    );
};


export default MusclePreview;
