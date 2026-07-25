import * as THREE from 'three';

export type LabSceneHandle = {
  setActive: (active: boolean) => void;
  dispose: () => void;
};

type AtomKind = 'V' | 'Sb' | 'A';

/**
 * Build a clear AV₃Sb₅-like flake:
 * one Kagome V net (emphasized), in-plane Sb, Sb caps, and a few alkali ions.
 */
function buildKagomeFlake() {
  const nn = 0.95; // V–V nearest neighbor (scene units)
  const a = nn * 2;
  const a1x = a;
  const a1y = 0;
  const a2x = a * 0.5;
  const a2y = a * Math.sqrt(3) * 0.5;

  const basis = [
    [0, 0],
    [a1x * 0.5, a1y * 0.5],
    [a2x * 0.5, a2y * 0.5],
  ] as const;

  const cells: [number, number][] = [];
  for (let i = -2; i <= 2; i++) {
    for (let j = -2; j <= 2; j++) {
      // Hexagonal-ish flake
      if (Math.abs(i + j) > 2) continue;
      cells.push([i, j]);
    }
  }

  const vKeys = new Set<string>();
  const V: THREE.Vector3[] = [];
  const Sb: THREE.Vector3[] = [];
  const A: THREE.Vector3[] = [];

  const key = (x: number, y: number) => `${Math.round(x * 1e3)},${Math.round(y * 1e3)}`;

  for (const [i, j] of cells) {
    const ox = a1x * i + a2x * j;
    const oy = a1y * i + a2y * j;

    for (const [bx, by] of basis) {
      const x = ox + bx;
      const y = oy + by;
      const k = key(x, y);
      if (vKeys.has(k)) continue;
      vKeys.add(k);
      // Scene: XZ plane, Y up
      V.push(new THREE.Vector3(x, 0, y));
    }

    // Sb at hexagon center of this cell
    const sx = ox + a * 0.5;
    const sy = oy + a * Math.sqrt(3) * (1 / 6);
    Sb.push(new THREE.Vector3(sx, 0, sy));
    // Apical Sb above / below hexagon center
    Sb.push(new THREE.Vector3(sx, 0.72, sy));
    Sb.push(new THREE.Vector3(sx, -0.72, sy));
  }

  // Alkali above the slab (sparse)
  for (const [i, j] of cells) {
    if ((i + j) % 2 !== 0) continue;
    const ox = a1x * i + a2x * j;
    const oy = a1y * i + a2y * j;
    A.push(new THREE.Vector3(ox + a * 0.5, 1.35, oy + a * Math.sqrt(3) * (1 / 6)));
  }

  // Nearest-neighbor V–V bonds
  const bonds: [THREE.Vector3, THREE.Vector3][] = [];
  const tol = nn * 1.12;
  for (let i = 0; i < V.length; i++) {
    for (let j = i + 1; j < V.length; j++) {
      if (V[i].distanceTo(V[j]) <= tol) bonds.push([V[i], V[j]]);
    }
  }

  return { V, Sb, A, bonds };
}

function makeBondMesh(
  a: THREE.Vector3,
  b: THREE.Vector3,
  radius: number,
  material: THREE.Material,
  geo: THREE.CylinderGeometry,
) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const mesh = new THREE.Mesh(geo, material);
  mesh.position.copy(a).add(b).multiplyScalar(0.5);
  mesh.scale.set(radius / 0.05, len, radius / 0.05); // base geo: r=0.05, h=1
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
  return mesh;
}

/**
 * Kagome-metal crystal for the homepage lab slide.
 */
export function mountLabScene(canvas: HTMLCanvasElement): LabSceneHandle {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const root = new THREE.Group();
  scene.add(root);

  // Bright lighting so atoms read without an env map
  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  const key = new THREE.DirectionalLight(0xffffff, 1.15);
  key.position.set(4, 8, 5);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0x9ed4d8, 0.65);
  fill.position.set(-5, 2, -3);
  scene.add(fill);
  const up = new THREE.DirectionalLight(0xffe0c0, 0.4);
  up.position.set(0, -4, 2);
  scene.add(up);

  // StandardMaterial: visible without PMREM (Physical+metal looks black)
  const matV = new THREE.MeshStandardMaterial({
    color: 0x2f9aa4,
    metalness: 0.35,
    roughness: 0.35,
    emissive: 0x14555c,
    emissiveIntensity: 0.35,
  });
  const matSb = new THREE.MeshStandardMaterial({
    color: 0xd2b48c,
    metalness: 0.25,
    roughness: 0.45,
    emissive: 0x4a3820,
    emissiveIntensity: 0.15,
  });
  const matA = new THREE.MeshStandardMaterial({
    color: 0xf0e6d8,
    metalness: 0.15,
    roughness: 0.4,
    emissive: 0xc47a3a,
    emissiveIntensity: 0.22,
  });
  const matBond = new THREE.MeshStandardMaterial({
    color: 0x8fd0d6,
    metalness: 0.2,
    roughness: 0.5,
    emissive: 0x1f6f78,
    emissiveIntensity: 0.25,
  });

  const geoV = new THREE.SphereGeometry(0.22, 28, 28);
  const geoSb = new THREE.SphereGeometry(0.26, 24, 24);
  const geoA = new THREE.SphereGeometry(0.32, 24, 24);
  const geoBond = new THREE.CylinderGeometry(0.05, 0.05, 1, 10);

  const { V, Sb, A, bonds } = buildKagomeFlake();
  const crystal = new THREE.Group();
  root.add(crystal);

  for (const p of V) {
    const m = new THREE.Mesh(geoV, matV);
    m.position.copy(p);
    crystal.add(m);
  }
  for (const p of Sb) {
    const m = new THREE.Mesh(geoSb, matSb);
    m.position.copy(p);
    crystal.add(m);
  }
  for (const p of A) {
    const m = new THREE.Mesh(geoA, matA);
    m.position.copy(p);
    crystal.add(m);
  }
  for (const [a, b] of bonds) {
    crystal.add(makeBondMesh(a, b, 0.045, matBond, geoBond));
  }

  // Center + frame camera to the crystal
  const box = new THREE.Box3().setFromObject(crystal);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  crystal.position.sub(center);

  const radius = Math.max(size.x, size.y, size.z) * 0.55;
  const fitDist = radius / Math.sin((camera.fov * Math.PI) / 360) / 1.05;
  camera.position.set(fitDist * 0.72, fitDist * 0.55, fitDist * 0.85);
  camera.lookAt(0, 0, 0);
  camera.near = fitDist / 50;
  camera.far = fitDist * 20;
  camera.updateProjectionMatrix();

  let active = true;
  let raf = 0;
  let pointerX = 0;
  let pointerY = 0;
  let targetX = 0;
  let targetY = 0;

  const camDist = camera.position.length();
  const camBase = camera.position.clone().normalize();
  const banner = canvas.closest('[data-pub-banner]');

  const onPointer = (e: PointerEvent) => {
    const host = banner ?? canvas;
    const rect = host.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) return;
    // Full-banner tracking, clamped so edges still feel strong
    const nx = Math.max(-1, Math.min(1, ((e.clientX - rect.left) / rect.width) * 2 - 1));
    const ny = Math.max(-1, Math.min(1, ((e.clientY - rect.top) / rect.height) * 2 - 1));
    targetX = nx;
    targetY = ny;
  };

  const onPointerLeave = () => {
    targetX = 0;
    targetY = 0;
  };

  banner?.addEventListener('pointermove', onPointer);
  banner?.addEventListener('pointerleave', onPointerLeave);

  const resize = () => {
    const parent = canvas.parentElement;
    const w = Math.max(1, parent?.clientWidth || canvas.clientWidth || 480);
    const h = Math.max(1, parent?.clientHeight || canvas.clientHeight || 480);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };

  const ro = new ResizeObserver(() => {
    resize();
    if (active) renderer.render(scene, camera);
  });
  if (canvas.parentElement) ro.observe(canvas.parentElement);
  resize();

  const clock = new THREE.Clock();

  const renderFrame = () => {
    const t = clock.getElapsedTime();
    if (!reduceMotion) {
      // Snappy follow
      pointerX += (targetX - pointerX) * 0.14;
      pointerY += (targetY - pointerY) * 0.14;

      // Orbit camera with mouse; light auto-spin underneath
      const yaw = pointerX * 1.15 + t * 0.08;
      const pitch = THREE.MathUtils.clamp(pointerY * 0.85, -0.95, 0.95);

      const cp = Math.cos(pitch);
      const sp = Math.sin(pitch);
      const cy = Math.cos(yaw);
      const sy = Math.sin(yaw);

      // Rotate the default camera bearing by yaw/pitch
      const bx = camBase.x;
      const by = camBase.y;
      const bz = camBase.z;
      // yaw around Y, then pitch around local X
      const x1 = bx * cy + bz * sy;
      const z1 = -bx * sy + bz * cy;
      const y2 = by * cp - z1 * sp;
      const z2 = by * sp + z1 * cp;

      camera.position.set(x1 * camDist, y2 * camDist, z2 * camDist);
      camera.lookAt(0, pointerY * -0.35, 0);
      root.rotation.y = pointerX * 0.25;
      root.rotation.x = pointerY * 0.15;
    }
    renderer.render(scene, camera);
  };

  const loop = () => {
    if (!active) return;
    renderFrame();
    if (!reduceMotion) raf = requestAnimationFrame(loop);
  };

  renderFrame();
  if (!reduceMotion) raf = requestAnimationFrame(loop);

  return {
    setActive(next: boolean) {
      if (next === active) return;
      active = next;
      if (active) {
        clock.start();
        resize();
        if (!reduceMotion) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(loop);
        } else {
          renderFrame();
        }
      } else {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    },
    dispose() {
      active = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      banner?.removeEventListener('pointermove', onPointer);
      banner?.removeEventListener('pointerleave', onPointerLeave);
      geoV.dispose();
      geoSb.dispose();
      geoA.dispose();
      geoBond.dispose();
      matV.dispose();
      matSb.dispose();
      matA.dispose();
      matBond.dispose();
      renderer.dispose();
    },
  };
}
