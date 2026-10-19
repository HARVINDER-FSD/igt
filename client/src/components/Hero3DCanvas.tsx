import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TrendingUp, BarChart3, MousePointerClick, Eye } from 'lucide-react';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 1.5, 7);
    camera.lookAt(0, 0.5, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // === 1. MARKETING DASHBOARD BASE (Floating Panel) ===
    const panelGeo = new THREE.BoxGeometry(5, 0.08, 3.5);
    const panelMat = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.85,
      shininess: 100,
    });
    const panel = new THREE.Mesh(panelGeo, panelMat);
    panel.position.y = -0.5;
    panel.rotation.x = -0.3;
    mainGroup.add(panel);

    // Panel border glow
    const borderGeo = new THREE.BoxGeometry(5.08, 0.02, 3.58);
    const borderMat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      transparent: true,
      opacity: 0.4,
    });
    const border = new THREE.Mesh(borderGeo, borderMat);
    border.position.y = -0.46;
    border.rotation.x = -0.3;
    mainGroup.add(border);

    // === 2. BAR CHART - Revenue Growth Bars ===
    const barColors = [0xfecaca, 0xfca5a5, 0xf87171, 0xef4444, 0xdc2626, 0xb91c1c, 0x991b1b];
    const barHeights = [0.6, 0.9, 0.7, 1.2, 1.0, 1.5, 1.8];
    const bars: THREE.Mesh[] = [];

    barHeights.forEach((h, i) => {
      const barGeo = new THREE.BoxGeometry(0.28, h, 0.28);
      const barMat = new THREE.MeshPhongMaterial({
        color: barColors[i],
        shininess: 80,
      });
      const bar = new THREE.Mesh(barGeo, barMat);
      bar.position.set(-1.5 + i * 0.5, h / 2 - 0.15, -0.5);
      bar.rotation.x = -0.3;
      mainGroup.add(bar);
      bars.push(bar);
    });

    // === 3. PIE CHART (3D Torus segments) ===
    const pieGroup = new THREE.Group();
    pieGroup.position.set(1.8, 0.8, 0.3);
    pieGroup.rotation.x = -0.5;

    const pieSegments = [
      { start: 0, end: Math.PI * 0.8, color: 0xef4444 },    // Google Ads 40%
      { start: Math.PI * 0.8, end: Math.PI * 1.3, color: 0xfca5a5 }, // Meta 25%
      { start: Math.PI * 1.3, end: Math.PI * 1.7, color: 0xfecaca }, // SEO 20%
      { start: Math.PI * 1.7, end: Math.PI * 2, color: 0x991b1b },  // Email 15%
    ];

    pieSegments.forEach((seg) => {
      const arcGeo = new THREE.TorusGeometry(0.5, 0.18, 12, 24, seg.end - seg.start);
      const arcMat = new THREE.MeshPhongMaterial({ color: seg.color, shininess: 60 });
      const arcMesh = new THREE.Mesh(arcGeo, arcMat);
      arcMesh.rotation.z = seg.start;
      pieGroup.add(arcMesh);
    });
    mainGroup.add(pieGroup);

    // === 4. GROWTH LINE (Bezier curve trending upward) ===
    const linePoints = [
      new THREE.Vector3(-2.0, 0.2, 0.8),
      new THREE.Vector3(-1.0, 0.5, 0.8),
      new THREE.Vector3(0.0, 0.3, 0.8),
      new THREE.Vector3(0.5, 1.0, 0.8),
      new THREE.Vector3(1.0, 0.8, 0.8),
      new THREE.Vector3(1.5, 1.5, 0.8),
      new THREE.Vector3(2.0, 1.3, 0.8),
      new THREE.Vector3(2.3, 2.0, 0.8),
    ];
    const lineCurve = new THREE.CatmullRomCurve3(linePoints);
    const lineGeo = new THREE.TubeGeometry(lineCurve, 50, 0.03, 8, false);
    const lineMat = new THREE.MeshPhongMaterial({ color: 0xdc2626, shininess: 100 });
    const lineMesh = new THREE.Mesh(lineGeo, lineMat);
    lineMesh.rotation.x = -0.3;
    mainGroup.add(lineMesh);

    // Growth arrow tip
    const arrowGeo = new THREE.ConeGeometry(0.08, 0.2, 8);
    const arrowMat = new THREE.MeshPhongMaterial({ color: 0xdc2626 });
    const arrow = new THREE.Mesh(arrowGeo, arrowMat);
    arrow.position.set(2.3, 2.1, 0.6);
    arrow.rotation.z = 0.3;
    arrow.rotation.x = -0.3;
    mainGroup.add(arrow);

    // === 5. FLOATING DATA PARTICLES ===
    const particlesCount = 60;
    const particlesGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 8;
      particlePositions[i * 3 + 1] = Math.random() * 4 - 0.5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: 0xef4444,
      size: 0.04,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    mainGroup.add(particles);

    // === 6. FLOATING METRIC CUBES (represent KPIs) ===
    const cubePositions = [
      { x: -2.5, y: 2.2, z: -1, color: 0xef4444 },
      { x: 2.8, y: 2.5, z: -0.5, color: 0xdc2626 },
      { x: -2.8, y: 0.5, z: 1.5, color: 0xb91c1c },
      { x: 2.5, y: -0.3, z: 1.2, color: 0xf87171 },
    ];
    const floatingCubes: THREE.Mesh[] = [];

    cubePositions.forEach((pos) => {
      const cubeGeo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
      const cubeMat = new THREE.MeshPhongMaterial({
        color: pos.color,
        transparent: true,
        opacity: 0.7,
        shininess: 100,
      });
      const cube = new THREE.Mesh(cubeGeo, cubeMat);
      cube.position.set(pos.x, pos.y, pos.z);
      mainGroup.add(cube);
      floatingCubes.push(cube);
    });

    // === LIGHTING ===
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.5);
    mainLight.position.set(3, 5, 4);
    scene.add(mainLight);

    const redLight = new THREE.PointLight(0xef4444, 2, 15);
    redLight.position.set(-2, 3, 3);
    scene.add(redLight);

    const fillLight = new THREE.DirectionalLight(0xfecaca, 0.6);
    fillLight.position.set(-3, 2, -2);
    scene.add(fillLight);

    // === INTERACTION ===
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      targetY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    // === ANIMATION ===
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Gentle float
      mainGroup.rotation.y += (targetX * 0.3 - mainGroup.rotation.y) * 0.03;
      mainGroup.rotation.x += (-targetY * 0.15 - mainGroup.rotation.x) * 0.03;

      // Animate bars (subtle pulse)
      bars.forEach((bar, i) => {
        const baseH = barHeights[i];
        const pulse = 1 + Math.sin(t * 2 + i * 0.8) * 0.08;
        bar.scale.y = pulse;
      });

      // Rotate pie chart slowly
      pieGroup.rotation.z = t * 0.3;

      // Float cubes
      floatingCubes.forEach((cube, i) => {
        cube.position.y += Math.sin(t * 1.5 + i * 1.5) * 0.003;
        cube.rotation.x = t * 0.5 + i;
        cube.rotation.y = t * 0.3 + i;
      });

      // Animate particles
      const positions = particlesGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particlesCount; i++) {
        positions[i * 3 + 1] += Math.sin(t + i) * 0.002;
      }
      particlesGeo.attributes.position.needsUpdate = true;

      // Arrow bob
      arrow.position.y = 2.1 + Math.sin(t * 3) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px' }}>
      {/* 3D Canvas */}
      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '400px',
          cursor: 'grab',
          position: 'relative',
          zIndex: 1,
        }}
      />

      {/* Live Dashboard Pill */}
      <div
        style={{
          position: 'absolute',
          bottom: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: '#FFFFFF',
          border: '1px solid rgba(239, 68, 68, 0.25)',
          padding: '7px 16px',
          borderRadius: '999px',
          zIndex: 10,
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
          whiteSpace: 'nowrap',
          fontSize: '0.78rem',
        }}
      >
        <span style={{ color: '#0F172A', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '5px' }}>
          <BarChart3 size={14} color="#EF4444" /> Live Campaign Dashboard
        </span>
        <span style={{ width: '1px', height: '14px', background: '#E2E8F0' }} />
        <span style={{ color: '#DC2626', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
          <TrendingUp size={13} /> +340% Growth
        </span>
      </div>

      {/* Floating CTR Badge */}
      <div
        style={{
          position: 'absolute',
          top: '15px',
          right: '8px',
          padding: '10px 14px',
          background: '#FFFFFF',
          borderRadius: '12px',
          border: '1px solid rgba(239, 68, 68, 0.2)',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.06)',
          zIndex: 5,
          animation: 'floatBadge 3s ease-in-out infinite',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
          <MousePointerClick size={13} color="#EF4444" />
          <span style={{ fontSize: '0.68rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Avg. CTR
          </span>
        </div>
        <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#DC2626' }}>4.8%</div>
      </div>

      {/* Floating Impressions Badge */}
      <div
        style={{
          position: 'absolute',
          top: '90px',
          left: '5px',
          padding: '10px 14px',
          background: '#FFFFFF',
          borderRadius: '12px',
          border: '1px solid rgba(239, 68, 68, 0.2)',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.06)',
          zIndex: 5,
          animation: 'floatBadge 4s ease-in-out infinite 0.5s',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
          <Eye size={13} color="#B91C1C" />
          <span style={{ fontSize: '0.68rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Impressions
          </span>
        </div>
        <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>2.4M</div>
      </div>

      <style>{`
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
};
