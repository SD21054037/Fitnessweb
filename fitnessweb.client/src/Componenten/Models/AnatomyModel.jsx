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

const AnatomyModel = ({ modelPath, currentView, selectedMuscle, controls }) => {
  const { scene } = useGLTF(modelPath);
  const meshRef = useRef();

  // Camera focus
  useFrame(() => {
    if (!controls || !selectedMuscle?.anatomy || currentView === "animation") return;

    const point = new THREE.Vector3(
      selectedMuscle.anatomy[currentView].x,
      selectedMuscle.anatomy[currentView].y,
      selectedMuscle.anatomy[currentView].z
    );

    controls.target.lerp(point, 0.1);
    controls.update();
  });

  return (
    <>
      <primitive object={scene} ref={meshRef} scale={1.5} />

      {currentView === "origin" && (
        <Marker position={new THREE.Vector3(
          selectedMuscle.anatomy.origin.x,
          selectedMuscle.anatomy.origin.y,
          selectedMuscle.anatomy.origin.z
        )} color="green" />
      )}

      {currentView === "insertion" && (
        <Marker position={new THREE.Vector3(
          selectedMuscle.anatomy.insertion.x,
          selectedMuscle.anatomy.insertion.y,
          selectedMuscle.anatomy.insertion.z
        )} color="blue" />
      )}

      {currentView === "animation" && (
        <SpierAnimatie path={selectedMuscle.anatomy.Animation} />
      )}
    </>
  );
};

export default AnatomyModel;
