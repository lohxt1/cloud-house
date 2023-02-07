import * as THREE from "three";
import React, { Suspense, lazy } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import StatsUtils from "../three-components/stats";
import Controls from "../three-components/controls";

import { Hut } from "../three-components/hut";

const Bloom = lazy(() => import("../three-shaders/bloom"));

const HutSpace = (props) => {
  return (
    <>
      <Canvas
        camera={{
          fov: 150,
          position: [230, -100, 100],
        }}
        style={{
          height: "100%",
          width: "100%",
          background: "#000",
          position: "fixed",
          // filter: 'invert(1)'
        }}
        // orthographic
      >
        <Suspense fallback={null}>
          <ambientLight />
          <Hut />
        </Suspense>
        <Suspense fallback={null}>
          <Bloom intensity={0.5} />
        </Suspense>
        <Suspense fallback={null}>
          {/* <StatsUtils /> */}
          <Controls />
        </Suspense>
      </Canvas>
    </>
  );
};

export default HutSpace;
