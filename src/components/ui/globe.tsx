"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

// Converte hex para RGB normalizado [0-1]
const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255,
      ]
    : [0, 0, 0];
};

const volcanaLimeRgb = hexToRgb("#D3FE3E");

export function Globe({ className, ...props }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  useEffect(() => {
    if (!canvasRef.current) return;

    let phi = 0;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: volcanaLimeRgb,
      glowColor: volcanaLimeRgb,
      markers: [
        // USA
        { location: [37.77, -122.41], size: 0.03 },
        { location: [40.71, -74.00], size: 0.03 },
        // Brazil
        { location: [-23.55, -46.63], size: 0.1 },
        // Latam
        { location: [19.43, -99.13], size: 0.05 },
        { location: [4.71, -74.07], size: 0.05 },
        { location: [-33.44, -70.66], size: 0.05 },
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi += 0.005;
        }
        state.phi = phi + r.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [r]);

  return (
    <canvas
      ref={canvasRef}
      onPointerDown={(e) => {
        pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
        if (canvasRef.current) {
          canvasRef.current.style.cursor = "grabbing";
        }
      }}
      onPointerUp={() => {
        pointerInteracting.current = null;
        if (canvasRef.current) {
          canvasRef.current.style.cursor = "grab";
        }
      }}
      onPointerOut={() => {
        pointerInteracting.current = null;
        if (canvasRef.current) {
          canvasRef.current.style.cursor = "grab";
        }
      }}
      onMouseMove={(e) => {
        if (pointerInteracting.current !== null) {
          const delta = e.clientX - pointerInteracting.current;
          pointerInteractionMovement.current = delta;
          api.start({
            r: delta / 200,
          });
        }
      }}
      onTouchMove={(e) => {
        if (pointerInteracting.current !== null && e.touches[0]) {
          const delta = e.touches[0].clientX - pointerInteracting.current;
          pointerInteractionMovement.current = delta;
          api.start({
            r: delta / 100,
          });
        }
      }}
      style={{
        width: "100%",
        height: "100%",
        contain: "layout paint size",
        opacity: 0,
        transition: "opacity 1s ease",
        cursor: "grab",
      }}
      className={className}
      {...props}
    />
  );
}