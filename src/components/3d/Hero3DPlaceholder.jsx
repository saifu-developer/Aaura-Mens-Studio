import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

/**
 * GoldSculpture: Sophisticated mouse-reactive centerpiece
 * Features multi-layered metallic gold architecture with gyroscopic ring
 * Dynamically reacts to cursor position with realistic specular lighting reflections
 */
function MouseReactiveSculpture() {
  const groupRef = useRef();
  const knotRef = useRef();
  const ringRef = useRef();
  const lightRef = useRef();

  useFrame((state, delta) => {
    // Current normalized pointer coords (-1 to 1)
    const px = state.pointer.x;
    const py = state.pointer.y;

    if (groupRef.current) {
      // Smooth lerping tilt responding to cursor
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        (px * Math.PI) / 5,
        0.06
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        (-py * Math.PI) / 6,
        0.06
      );
    }

    if (knotRef.current) {
      // Gentle continuous ambient rotation
      knotRef.current.rotation.y += delta * 0.25;
      knotRef.current.rotation.z += delta * 0.1;
    }

    if (ringRef.current) {
      // Counter-rotating outer gimbal ring
      ringRef.current.rotation.x += delta * 0.18;
      ringRef.current.rotation.z -= delta * 0.12;
    }

    if (lightRef.current) {
      // Light follows mouse cursor for real-time specular glints
      lightRef.current.position.x = THREE.MathUtils.lerp(lightRef.current.position.x, px * 8 + 4, 0.08);
      lightRef.current.position.y = THREE.MathUtils.lerp(lightRef.current.position.y, py * 8 + 4, 0.08);
    }
  });

  return (
    <>
      {/* Dynamic Cursor-Following Specular Spotlight */}
      <pointLight ref={lightRef} position={[5, 5, 4]} intensity={2.2} color="#f4e4a6" distance={20} />
      <ambientLight intensity={0.65} />
      <directionalLight position={[-8, -5, -4]} intensity={0.9} color="#aa8c2c" />

      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <group ref={groupRef} scale={1.7}>
          {/* Inner Golden Torus Knot Sculpture */}
          <mesh ref={knotRef}>
            <torusKnotGeometry args={[0.95, 0.28, 140, 36]} />
            <meshStandardMaterial
              color="#d4af37"
              metalness={0.92}
              roughness={0.12}
              emissive="#aa8c2c"
              emissiveIntensity={0.08}
            />
          </mesh>

          {/* Outer Concentric Precision Gimbal Ring */}
          <mesh ref={ringRef} scale={1.45}>
            <torusGeometry args={[1.3, 0.03, 24, 100]} />
            <meshStandardMaterial
              color="#f4e4a6"
              metalness={0.95}
              roughness={0.08}
              emissive="#665014"
              emissiveIntensity={0.15}
            />
          </mesh>

          {/* Secondary Delicate Equatorial Ring */}
          <mesh rotation={[Math.PI / 2, 0, 0]} scale={1.55}>
            <torusGeometry args={[1.3, 0.02, 16, 90]} />
            <meshStandardMaterial
              color="#8c7526"
              metalness={0.88}
              roughness={0.2}
            />
          </mesh>
        </group>
      </Float>
    </>
  );
}

export const Hero3DPlaceholder = ({ className = "" }) => {
  return (
    <div className={`relative w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[560px] flex items-center justify-center ${className}`}>
      {/* Background Deep Luxury Glow */}
      <div className="absolute inset-0 bg-gold-glow pointer-events-none rounded-full blur-3xl opacity-35 transform scale-90" />

      {/* R3F Canvas Container with Mouse Event Passthrough */}
      <div className="w-full h-full relative z-10">
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-44 h-44 rounded-full border border-champagne/20 bg-champagne/5 animate-pulse flex items-center justify-center">
                <span className="text-[10px] font-mono tracking-widest text-champagne/60 uppercase">
                  AAURA 3D CANVAS
                </span>
              </div>
            </div>
          }
        >
          <Canvas
            camera={{ position: [0, 0, 5.2], fov: 45 }}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            dpr={[1, 1.5]}
            style={{ background: 'transparent' }}
          >
            <MouseReactiveSculpture />
          </Canvas>
        </Suspense>
      </div>

      {/* Frame Corner Accents */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-champagne/40 pointer-events-none" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-champagne/40 pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-champagne/40 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-champagne/40 pointer-events-none" />
    </div>
  );
};

export default Hero3DPlaceholder;
