import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import './work.css';

const Work = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const scene = new THREE.Scene();

        // Objects
        const objectsDistance = 4;
        const material = new THREE.MeshToonMaterial({ color: '#F9D401' });

        const mesh1 = new THREE.Mesh(
            new THREE.TorusKnotGeometry(1, 0.4, 16, 60),
            material
        );
        const mesh2 = new THREE.Mesh(
            new THREE.ConeGeometry(1, 2, 32),
            material
        );
        const mesh3 = new THREE.Mesh(
            new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
            material
        );

        mesh1.position.y = - objectsDistance * 0;
        mesh2.position.y = - objectsDistance * 1;
        mesh3.position.y = - objectsDistance * 2;

        mesh1.position.x = 2;
        mesh2.position.x = - 2;
        mesh3.position.x = 2;

        const sectionMeshes = [ mesh1, mesh2, mesh3 ];

        scene.add(mesh1, mesh2, mesh3);

        // Particles
        const particlesCount = 200;
        const positions = new Float32Array(particlesCount * 3);

        for(let i = 0; i < particlesCount; i++) {
            positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance * sectionMeshes.length;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }

        const particlesGeometry = new THREE.BufferGeometry();
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            color: '#ffeded',
            sizeAttenuation: true,
            size: 0.03
        });

        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);

        // Lights
        const directionalLight = new THREE.DirectionalLight('#ffffff', 1);
        directionalLight.position.set(1, 1, 0);
        scene.add(directionalLight);

        // Sizes
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        // Camera
        const cameraGroup = new THREE.Group();
        scene.add(cameraGroup);

        const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100);
        camera.position.z = 6;
        cameraGroup.add(camera);

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Scroll
        let scrollY = window.scrollY;
        let currentSection = 0;

        // Cursor
        const cursor = { x: 0, y: 0 };

        // Animation
        const clock = new THREE.Clock();
        let previousTime = 0;

        const tick = () => {
            const elapsedTime = clock.getElapsedTime();
            const deltaTime = elapsedTime - previousTime;
            previousTime = elapsedTime;

            // Animate meshes
            for(const mesh of sectionMeshes) {
                mesh.rotation.x += deltaTime * 0.1;
                mesh.rotation.y += deltaTime * 0.12;
            }

            // Animate camera
            camera.position.y = - scrollY / sizes.height * objectsDistance;

            const parallaxX = cursor.x * 0.5;
            const parallaxY = - cursor.y * 0.5;
            
            cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime;
            cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime;

            // Render
            renderer.render(scene, camera);

            // Call tick again on the next frame
            window.requestAnimationFrame(tick);
        };

        tick();

        // Event listeners
        window.addEventListener('resize', () => {
            // Update sizes
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;

            // Update camera
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();

            // Update renderer
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });

        window.addEventListener('scroll', () => {
            scrollY = window.scrollY;
            const newSection = Math.round(scrollY / sizes.height);

            if(newSection != currentSection) {
                currentSection = newSection;

                gsap.to(
                    sectionMeshes[currentSection].rotation,
                    {
                        duration: 1.5,
                        ease: 'power2.inOut',
                        x: '+=6',
                        y: '+=3'
                    }
                );
            }
        });

        window.addEventListener('mousemove', (event) => {
            cursor.x = event.clientX / sizes.width - 0.5;
            cursor.y = event.clientY / sizes.height - 0.5;
        });

        // Cleanup
        return () => {
            window.removeEventListener('resize', null);
            window.removeEventListener('scroll', null);
            window.removeEventListener('mousemove', null);
        };
    }, []);

    return (
        <>
            <canvas ref={canvasRef} className="webgl"></canvas>
            <div className="work-container">
                <h1 className="work-title">My Portfolio</h1>
                {[
                    "Welcome to My Portfolio",
                    "About Me",
                    "Skills",
                    "Projects",
                    "Experience",
                    "Education",
                    "Achievements",
                    "Testimonials",
                    "Blog",
                    "Contact Me"
                ].map((title, index) => (
                    <section key={index} className="work-section">
                        <h2>{title}</h2>
                        <p>This is the content for {title.toLowerCase()}.</p>
                    </section>
                ))}
            </div>
        </>
    );
};

export default Work;