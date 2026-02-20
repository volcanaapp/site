"use client";

import Spline from '@splinetool/react-spline';

interface SplineAnimationProps {
  sceneUrl?: string;
}

const DEFAULT_URL = 'https://my.spline.design/untitled-8sPGLwy4MxIBJMzD9L84K60v/';

export default function SplineAnimation({ sceneUrl = DEFAULT_URL }: SplineAnimationProps) {
  return (
    <div className="w-full h-full">
      <Spline scene={sceneUrl} className="w-full h-full" />
    </div>
  );
}