import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
const Cube = ({  goTo }) => {
  const facesRef = useRef([]);
  const cubeRef = useRef(); // Reference to the entire cube mesh

  // Colors for each face
  const faceColors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];

  // Names for each face
  const faceNames = ['3', '4', '5', '6', '1', '2'];

  // Function to handle clicks
  const handleFaceClick = (event, index) => {
    event.stopPropagation();
    // alert(`You clicked the face ${faceNames[index]} !!`);
    goTo(faceNames[index].toLowerCase()); // Navigate to the corresponding route

  };

  // Positioning and rotating the faces to form a cube
  const positions = [
    [1.7, 0, 0], // Right
    [-1.7, 0, 0], // Left
    [0, 1.7, 0], // Top
    [0, -1.7, 0], // Bottom
    [0, 0, 1.7], // Front
    [0, 0, -1.7], // Back
  ];

  const rotations = [
    [0, Math.PI / 2, 0], // Right face rotation
    [0, -Math.PI / 2, 0], // Left face rotation
    [-Math.PI / 2, 0, 0], // Top face rotation
    [Math.PI / 2, 0, 0], // Bottom face rotation
    [0, 0, 0], // Front face (no rotation)
    [Math.PI, 0, 0], // Back face rotation
  ];

  // Rotate the entire cube around its axes
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += 0.01; // Rotate around Y-axis
      cubeRef.current.rotation.x += 0.01; // Rotate around X-axis
      cubeRef.current.rotation.z += 0.01; // Rotate around Z-axis
    }
  });

  return (
    <group ref={cubeRef}>
      {faceColors.map((color, index) => (
        <mesh
          key={index}
          ref={(el) => (facesRef.current[index] = el)}
          position={positions[index]}
          rotation={rotations[index]} // Apply rotation to position the faces properly
          onClick={(event) => handleFaceClick(event, index)}
        >
          <boxGeometry args={[2, 2, 0.1]} />
          <meshStandardMaterial color={color} />
          <Text
            position={[0, 0, 0.1]} // Adjust position to make sure it's centered
            color="white"
            anchorX="center"
            anchorY="middle"
            fontSize={0.3}
          >
            {faceNames[index]} {/* Use the face name instead of color */}
          </Text>
          <OrbitControls minDistance={5} maxDistance={5} />
        </mesh>
        
      ))}
    </group>
  );
};

export default Cube;