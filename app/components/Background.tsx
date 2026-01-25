"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";

function DNAStrands({ strandCount = 4 }) {
    const rungsPerStrand = 60;
    const totalInstances = strandCount * rungsPerStrand * 2;
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Create unique data for each strand
    const strands = useMemo(() => {
        return Array.from({ length: strandCount }, (_, i) => ({
            id: i,
            x: (Math.random() - 0.5) * 40,
            z: (Math.random() - 0.5) * 15 - 10, // Push some further back
            rotSpeed: 0.2 + Math.random() * 0.4,
            yOffset: Math.random() * 20,
            scale: 0.1 + Math.random() * 0.1
        }));
    }, [strandCount]);

    useFrame((state, delta) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();

        strands.forEach((strand, sIdx) => {
            for (let i = 0; i < rungsPerStrand; i++) {
                const step = i / rungsPerStrand;
                const y = -25 + (i * 0.8) + ((time * 2 + strand.yOffset) % 40);
                const normalizedY = (y + 25) / 50; // 0 to 1 range

                // Unraveling effect: gets wider as it goes up
                const unravelFactor = Math.pow(normalizedY, 2);
                const radius = 1.5 + (unravelFactor * 6);
                const drift = Math.sin(time + i * 0.1 + sIdx) * unravelFactor * 3;

                // Base phase
                const phase = (i / rungsPerStrand) * Math.PI * 4;

                // Strand 1
                const angle1 = phase + time * strand.rotSpeed;
                const x1 = Math.cos(angle1) * radius + drift + strand.x;
                const z1 = Math.sin(angle1) * radius + strand.z;

                dummy.position.set(x1, y, z1);
                dummy.scale.set(strand.scale * 1.5, strand.scale * 1.5, strand.scale * 1.5);
                dummy.updateMatrix();
                meshRef.current!.setMatrixAt((sIdx * rungsPerStrand * 2) + (i * 2), dummy.matrix);

                // Strand 2
                const angle2 = phase + Math.PI + time * strand.rotSpeed;
                const x2 = Math.cos(angle2) * radius - drift + strand.x;
                const z2 = Math.sin(angle2) * radius + strand.z;

                dummy.position.set(x2, y, z2);
                dummy.scale.set(strand.scale * 1.5, strand.scale * 1.5, strand.scale * 1.5);
                dummy.updateMatrix();
                meshRef.current!.setMatrixAt((sIdx * rungsPerStrand * 2) + (i * 2) + 1, dummy.matrix);
            }
        });

        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, totalInstances]}>
            <sphereGeometry args={[1, 6, 6]} />
            <meshStandardMaterial
                color="#ffffff"
                emissive="#db2777"
                emissiveIntensity={4}
                transparent
                opacity={0.8}
            />
        </instancedMesh>
    );
}

function LargeSmoke() {
    const count = 20;
    const mesh = useRef<THREE.InstancedMesh>(null);

    const smokeTexture = useMemo(() => {
        if (typeof document === 'undefined') return null;
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
            gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.15)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 128, 128);
        }
        return new THREE.CanvasTexture(canvas);
    }, []);

    const particles = useMemo(() => {
        return Array.from({ length: count }, (_, i) => ({
            x: (Math.random() - 0.5) * 60,
            y: -50 + Math.random() * 100,
            z: -20 + Math.random() * 10,
            speed: 0.05 + Math.random() * 0.08, // Increased speed
            baseScale: 30 + Math.random() * 20,
            rot: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 0.01,
        }));
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state, delta) => {
        if (!mesh.current) return;
        particles.forEach((p, i) => {
            p.y += p.speed * 60 * delta;
            p.rot += p.rotSpeed * 60 * delta;

            // Loop back to bottom
            if (p.y > 60) {
                p.y = -60;
                p.x = (Math.random() - 0.5) * 60;
            }

            // Smoke expands as it rises
            const progress = (p.y + 60) / 120; // 0 to 1
            const currentScale = p.baseScale * (1 + progress * 1.5);
            const currentOpacity = 0.7 * (1 - progress * 0.5); // Fade slightly as it disperses

            dummy.position.set(p.x, p.y, p.z);
            dummy.rotation.z = p.rot;
            dummy.scale.set(currentScale, currentScale, 1);
            dummy.updateMatrix();
            mesh.current!.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <planeGeometry args={[1, 1]} />
            <meshStandardMaterial
                map={smokeTexture}
                transparent
                opacity={0.7}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                color="#831843"
            />
        </instancedMesh>
    );
}

function Scene() {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 25]} />
            <ambientLight intensity={0.05} />
            <pointLight position={[0, -20, 10]} intensity={10} color="#db2777" distance={120} />

            <Suspense fallback={null}>
                <LargeSmoke />
                <DNAStrands strandCount={5} />
            </Suspense>
        </>
    );
}

export default function Background() {
    return (
        <div className="fixed inset-0 -z-10 bg-black overflow-hidden pointer-events-none">
            <Suspense fallback={<div className="w-full h-full bg-black" />}>
                <div className="absolute inset-0 blur-sm"> {/* Reduced blur so elements are visible but soft */}
                    <Canvas
                        dpr={1}
                        gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
                        className="absolute inset-0"
                    >
                        <Scene />
                    </Canvas>
                </div>
            </Suspense>

            {/* Dark vignette to focus content */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none z-10" />

            {/* Bottom glow */}
            <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-[#db277733] to-transparent pointer-events-none z-10" />
        </div>
    );
}
