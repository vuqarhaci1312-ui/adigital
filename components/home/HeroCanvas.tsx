"use client";

import { useEffect, useRef } from "react";
import {
  Color,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Vector2,
  Vector4,
  WebGLRenderTarget,
  WebGLRenderer,
} from "three";
import { useLenis } from "lenis/react";
import {
  colorFragmentShader,
  dissolveFragmentShader,
  fluidFragmentShader,
  HERO_COLORS,
  vertexShader,
} from "@/lib/shaders";

function hexToRgb(hex: string): [number, number, number] {
  return [
    parseInt(hex.slice(1, 3), 16) / 255,
    parseInt(hex.slice(3, 5), 16) / 255,
    parseInt(hex.slice(5, 7), 16) / 255,
  ];
}

type HeroCanvasProps = {
  className?: string;
};

export default function HeroCanvas({ className }: HeroCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);

  useLenis(({ scroll }) => {
    if (containerRef.current) {
      progressRef.current = Math.min((scroll / window.innerHeight) * 1, 1.1);
    }
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId = 0;
    let width = container.clientWidth;
    let height = container.clientHeight;

    const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const scene = new Scene();
    const renderer = new WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
      stencil: false,
      depth: false,
    });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.autoClear = false;
    container.appendChild(renderer.domElement);

    let readTarget = new WebGLRenderTarget(width, height, {
      minFilter: 1006,
      magFilter: 1006,
    });
    let writeTarget = new WebGLRenderTarget(width, height, {
      minFilter: 1006,
      magFilter: 1006,
    });

    let frame = 0;
    const geometry = new PlaneGeometry(2, 2);

    const fluidMaterial = new ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Vector2(width, height) },
        iMouse: { value: new Vector4(0, 0, 0, 0) },
        iFrame: { value: 0 },
        iPreviousFrame: { value: null as WebGLRenderTarget["texture"] | null },
        uBrushSize: { value: 30 },
        uBrushStrength: { value: 2 },
        uFluidDecay: { value: 0.98 },
        uTrailLength: { value: 0.8 },
        uStopDecay: { value: 0.85 },
      },
      vertexShader,
      fragmentShader: fluidFragmentShader,
    });

    const colorMaterial = new ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Vector2(width, height) },
        iFluid: { value: null as WebGLRenderTarget["texture"] | null },
        uDistortionAmount: { value: 1 },
        uColor1: { value: new Color(...hexToRgb(HERO_COLORS.color1)) },
        uColor2: { value: new Color(...hexToRgb(HERO_COLORS.color2)) },
        uColor3: { value: new Color(...hexToRgb(HERO_COLORS.color3)) },
        uColor4: { value: new Color(...hexToRgb(HERO_COLORS.color4)) },
        uColorIntensity: { value: 1 },
        uSoftness: { value: 1 },
      },
      vertexShader,
      fragmentShader: colorFragmentShader,
    });

    const dissolveMaterial = new ShaderMaterial({
      uniforms: {
        uProgress: { value: 0 },
        uResolution: { value: new Vector2(width, height) },
        uColor: { value: new Color(...hexToRgb(HERO_COLORS.dissolve)) },
        uSpread: { value: 0.5 },
      },
      vertexShader,
      fragmentShader: dissolveFragmentShader,
      transparent: true,
    });

    const fluidMesh = new Mesh(geometry, fluidMaterial);
    const colorMesh = new Mesh(geometry, colorMaterial);
    const dissolveMesh = new Mesh(geometry, dissolveMaterial);
    scene.add(fluidMesh);

    let mouseX = 0;
    let mouseY = 0;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let lastMove = 0;

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX;
      const y = event.clientY;
      if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        prevMouseX = mouseX;
        prevMouseY = mouseY;
        mouseX = x - rect.left;
        mouseY = height - (y - rect.top);
        lastMove = performance.now();
        fluidMaterial.uniforms.iMouse.value.set(mouseX, mouseY, prevMouseX, prevMouseY);
      } else {
        fluidMaterial.uniforms.iMouse.value.set(0, 0, 0, 0);
      }
    };

    const onMouseLeave = () => {
      fluidMaterial.uniforms.iMouse.value.set(0, 0, 0, 0);
    };

    const onResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;
      renderer.setSize(width, height);
      fluidMaterial.uniforms.iResolution.value.set(width, height);
      colorMaterial.uniforms.iResolution.value.set(width, height);
      dissolveMaterial.uniforms.uResolution.value.set(width, height);
      readTarget.dispose();
      writeTarget.dispose();
      readTarget = new WebGLRenderTarget(width, height, {
        minFilter: 1006,
        magFilter: 1006,
      });
      writeTarget = new WebGLRenderTarget(width, height, {
        minFilter: 1006,
        magFilter: 1006,
      });
      frame = 0;
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", onResize);

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = performance.now() * 0.001;

      fluidMaterial.uniforms.iTime.value = time;
      colorMaterial.uniforms.iTime.value = time;
      fluidMaterial.uniforms.iFrame.value = frame;
      dissolveMaterial.uniforms.uProgress.value = progressRef.current;

      if (performance.now() - lastMove > 100) {
        fluidMaterial.uniforms.iMouse.value.set(0, 0, 0, 0);
      }

      fluidMaterial.uniforms.iPreviousFrame.value = writeTarget.texture;

      renderer.setRenderTarget(readTarget);
      renderer.render(fluidMesh, camera);

      renderer.setRenderTarget(null);
      renderer.clear();

      colorMaterial.uniforms.iFluid.value = readTarget.texture;
      renderer.render(colorMesh, camera);
      renderer.render(dissolveMesh, camera);

      const temp = readTarget;
      readTarget = writeTarget;
      writeTarget = temp;
      frame += 1;
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      readTarget.dispose();
      writeTarget.dispose();
      geometry.dispose();
      fluidMaterial.dispose();
      colorMaterial.dispose();
      dissolveMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    />
  );
}
