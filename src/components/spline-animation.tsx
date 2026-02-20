"use client";

import Spline from '@splinetool/react-spline/next';

export default function SplineAnimation() {
  return (
    <Spline
      scene="https://prod.spline.design/6atEI76RYKKZm-Ig/scene.splinecode" 
      className="w-full h-full scale-150 lg:scale-125"
    />
  );
}