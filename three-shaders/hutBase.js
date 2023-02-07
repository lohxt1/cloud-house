import * as THREE from 'three';

const HutBaseMaterial = new THREE.ShaderMaterial({
	uniforms: {
		ogTexture: { type: 't', value: undefined },
		uColor: {
			// value: new THREE.Vector3(Math.random(), Math.random(), Math.random()),
			value: new THREE.Vector3(1.0, 1.0, 1.0)
		}
	},
	vertexShader: `
	  varying vec2 vUv;
      uniform vec3 uColor;
	  void main() {
		vUv = uv;
		gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
	  }
	`,
	fragmentShader: `
	  varying vec2 vUv;
      uniform vec3 uColor;
  
      void main() {
        vec2 uv = vUv;
        vec4 color = vec4(1.0, 0.5, vUv.y, 1.0);
        gl_FragColor = color;
    }
	`,
	depthWrite: true,
	// depthTest: false,
	transparent: true,
	wireframe: true,
	side: THREE.DoubleSide
});

export { HutBaseMaterial };
