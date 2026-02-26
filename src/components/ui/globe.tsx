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
      width: 1000 * 2, // Increased resolution
      height: 1000 * 2, // Increased resolution
      phi: 0,
      theta: 0.2, // Tilted slightly
      dark: 1,
      diffuse: 1.2,
      mapSamples: 25000, // More dots/samples for tech look
      mapBrightness: 6,
      baseColor: [0.05, 0.05, 0.05], // Darker base
      markerColor: [0.1, 0.8, 0.0], // Laser Green
      glowColor: [0.05, 0.5, 0.2], // Greenish glow
      markers: [
        // USA
        { location: [40.7128, -74.0060], size: 0.1 }, // NY
        { location: [37.7749, -122.4194], size: 0.1 }, // SF
        { location: [34.0522, -118.2437], size: 0.08 }, // LA
        { location: [41.8781, -87.6298], size: 0.08 }, // Chicago
        
        // Brazil
        { location: [-23.5505, -46.6333], size: 0.12 }, // SP (Hub)
        { location: [-22.9068, -43.1729], size: 0.1 }, // Rio
        { location: [-15.7975, -47.8919], size: 0.08 }, // Brasilia
        { location: [-30.0346, -51.2177], size: 0.08 }, // Porto Alegre
        
        // LATAM
        { location: [19.4326, -99.1332], size: 0.1 }, // Mexico City
        { location: [4.7110, -74.0721], size: 0.08 }, // Bogota
        { location: [-34.6037, -58.3816], size: 0.08 }, // Buenos Aires
        { location: [-33.4489, -70.6693], size: 0.08 }, // Santiago
        { location: [-12.0464, -77.0428], size: 0.08 }, // Lima
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.005; // Faster rotation
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