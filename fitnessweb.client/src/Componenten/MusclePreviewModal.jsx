import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Modal } from 'antd';
import { Suspense } from 'react';
export default function MusclePreviewModal({ visible, onClose, glbPath }) {
    function Model() {
        const { scene } = useGLTF(glbPath);
        return <primitive object={scene} scale={1.5} />;
    }

    return (
        <Modal open={visible} onCancel={onClose} footer={null} width={600}>
            <div style={{ height: 400 }}>
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[0, 5, 5]} />
                    <Suspense fallback={null}>
                        <Model />
                    </Suspense>
                    <OrbitControls />
                </Canvas>
            </div>
        </Modal>
    );
}
