import * as THREE from "three";
import React, { Suspense, lazy } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import StatsUtils from "../three-components/stats";
import Controls from "../three-components/controls";
import {
  EffectComposer,
  DepthOfField,
  Noise,
  Bloom,
} from "@react-three/postprocessing";

import { Hut } from "../three-components/hut";

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
          <EffectComposer>
            <DepthOfField
              focusDistance={0}
              focalLength={0.02}
              bokehScale={0.5}
              height={1000}
            />
            <Bloom
              luminanceThreshold={0}
              luminanceSmoothing={0.1}
              height={700}
              intensity={0.5}
            />
            {/* <Noise opacity={0.5} /> */}
          </EffectComposer>
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
