import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Marker-component
const Marker = ({ position, color = "red" }) => (
  <mesh position={position}>
    <sphereGeometry args={[0.02, 16, 16]} />
    <meshBasicMaterial color={color} />
  </mesh>
);

// Animatie-component
const SpierAnimatie = ({ path }) => {
  const { scene, animations } = useGLTF(path);
  const mixerRef = useRef();

  useEffect(() => {
    if (animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      const action = mixerRef.current.clipAction(animations[0]);
      action.play();
    }
  }, [animations, scene]);

  useFrame((_, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);
  });

  return <primitive object={scene} />;
};

const AnatomyModel = ({ modelPath, currentView, selectedmuscle, controls }) => {
  const { scene } = useGLTF(modelPath);
  const meshRef = useRef();

  // Camera focus
  useFrame(() => {
    if (!controls || !selectedmuscle?.anatomy || currentView === "animation") return;

    const point = new THREE.Vector3(
      selectedmuscle.anatomy[currentView].x,
      selectedmuscle.anatomy[currentView].y,
      selectedmuscle.anatomy[currentView].z
    );

    controls.target.lerp(point, 0.1);
    controls.update();
  });

  return (
    <>
      <primitive object={scene} ref={meshRef} scale={1.5} />

      {currentView === "origin" && (
        <Marker position={new THREE.Vector3(
          selectedmuscle.anatomy.origin.x,
          selectedmuscle.anatomy.origin.y,
          selectedmuscle.anatomy.origin.z
        )} color="green" />
      )}

      {currentView === "insertion" && (
        <Marker position={new THREE.Vector3(
          selectedmuscle.anatomy.insertion.x,
          selectedmuscle.anatomy.insertion.y,
          selectedmuscle.anatomy.insertion.z
        )} color="blue" />
      )}

      {currentView === "animation" && (
        <SpierAnimatie path={selectedmuscle.anatomy.Animation} />
      )}
    </>
  );
};

export default AnatomyModel;
