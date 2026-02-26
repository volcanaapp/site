"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function Globe({
  className,
}: {
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.39, 1.0, 0.0], // Volcana Lime #63ff00 (approx)
      glowColor: [0.1, 0.1, 0.1],
      markers: [
        // USA
        { location: [40.7128, -74.0060], size: 0.05 }, // NY
        { location: [37.7749, -122.4194], size: 0.05 }, // SF
        
        // Brazil
        { location: [-23.5505, -46.6333], size: 0.07 }, // SP
        { location: [-22.9068, -43.1729], size: 0.05 }, // Rio
        
        // LATAM
        { location: [19.4326, -99.1332], size: 0.05 }, // Mexico City
        { location: [4.7110, -74.0721], size: 0.05 }, // Bogota
        { location: [-34.6037, -58.3816], size: 0.05 }, // Buenos Aires
        { location: [-33.4489, -70.6693], size: 0.05 }, // Santiago
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div
      className={cn(
        "relative mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          opacity: 1,
        }}
      />
    </div>
  );
}
