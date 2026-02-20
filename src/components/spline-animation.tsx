"use client";

import Spline from '@splinetool/react-spline/next';

export default function SplineAnimation() {
  return (
    <Spline
      scene="https://prod.spline.design/dMwNhkcMhsIWW8PB/scene.splinecode" 
      className="w-full h-full scale-150 lg:scale-125"
    />
  );
}