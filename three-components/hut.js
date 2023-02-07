import * as THREE from "three";
import { useMemo, lazy, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { RoundedBox, Cloud } from "@react-three/drei";
import { HutBaseMaterial } from "../three-shaders/hutBase";

const HutBase = (props) => {
  const clonedMaterial = useMemo(() => HutBaseMaterial.clone(), []);

  return (
    <>
      <mesh position={[0, -200, -0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[300, 300, 10, 10]} />
        <shaderMaterial attach="material" args={[clonedMaterial]} />
      </mesh>
    </>
  );
};

const Hut = (props) => {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.001;
  });

  return (
    <group ref={ref}>
      <HutBase />
      <Cloud scale={10} position={[0, 1000, 0]} speed={1} segments={30} />
      <Cloud scale={2} position={[50, 1000, -50]} speed={1} segments={30} />
      <Cloud scale={2} position={[-50, 1000, 50]} speed={1} segments={30} />
      <Cloud scale={2} position={[-50, 1000, -50]} speed={1} segments={30} />
      <Cloud scale={2} position={[50, 1000, 50]} speed={1} segments={30} />
      <HutRoom
        position={[0, -50, 0]}
        width={Math.random() * 100 + 100}
        // depth={Math.random() * 30 + 70}
        // rotation={[0, Math.PI / Math.random(), 0]}
      />
    </group>
  );
};

const HutRoom = (props) => {
  const {
    width = 200,
    height = 200,
    depth = 100,
    position = [0, 0, 0],
    rotation,
  } = props;

  return (
    <group position={position} rotation={rotation}>
      <group position={[-width / 2, 0, 0]}>
        {/* left wall */}
        <Wall
          width={width}
          height={height}
          depth={depth}
          position={[0, 0, depth / 2]}
        />

        {/* right wall */}
        <Wall
          width={width}
          height={height}
          depth={depth}
          position={[0, 0, -depth / 2]}
        />

        {/* back wall */}
        <Wall
          width={depth}
          height={height}
          depth={depth}
          position={[0, 0, depth / 2]}
          rotation={[0, Math.PI / 2, 0]}
          withPeak={true}
        />

        {/* front wall */}
        <Wall
          width={depth}
          height={height}
          depth={depth}
          position={[width, 0, depth / 2]}
          rotation={[0, Math.PI / 2, 0]}
          withPeak={true}
        />

        {/* right roof */}
        <Wall
          width={width}
          height={depth + 10}
          position={[
            0,
            (height / 2) * 1.5 - ((height / 2) * 7) / (height / 10),
            -(depth * 7) / 20,
          ]}
          rotation={[Math.PI / 4, 0, 0]}
          variance={0}
          withJitter={true}
        />

        {/* left roof */}
        <Wall
          width={width}
          height={depth + 10}
          position={[
            0,
            (height / 2) * 1.5 - ((height / 2) * 7) / (height / 10),
            (depth * 7) / 20,
          ]}
          rotation={[-Math.PI / 4, 0, 0]}
          variance={0}
          withJitter={true}
        />

        <Wall
          width={depth / 3}
          height={height}
          position={[width, -50, depth / 6]}
          rotation={[0, Math.PI / 2, 0]}
          color={0x000000}
          withJitter={true}
          jitterAmount={20}
        />
      </group>
    </group>
  );
};

const Wall = (props) => {
  const {
    divisions = 30,
    variance = 100,
    width = 200,
    height = 200,
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    withPeak,
    withJitter = false,
    color = 0xffffff,
    jitterAmount = 3,
  } = props;

  const peakDelta = 100 / divisions;
  const _withPeak = withPeak ? 1 : 0;
  const _withJitter = withJitter ? 1 : 0;

  return (
    <group position={position} rotation={rotation}>
      {Array.from({ length: divisions }).map((_, idx) => {
        let _height = height + Math.random() * variance;
        return (
          <mesh
            position={[
              (idx * width) / divisions + width / (2 * divisions),
              -(_height - height) / 2 +
                _withPeak *
                  ((idx > divisions / 2 ? divisions - idx : idx) * peakDelta) +
                _withJitter * Math.random() * jitterAmount,
              0,
            ]}
            rotation={[0, 0, 0]}
          >
            <planeBufferGeometry
              attach="geometry"
              args={[width / divisions, _height, 6, 2]}
            />
            <meshStandardMaterial attach="material" wireframe color={color} />
            {/* <shaderMaterial attach="material" args={[clonedMaterial]} /> */}
          </mesh>
        );
      })}
    </group>
  );
};

export { Hut };
