"use client";

interface SplineAnimationProps {
  sceneUrl?: string;
}

const DEFAULT_URL = 'https://my.spline.design/untitled-8sPGLwy4MxIBJMzD9L84K60v/';

export default function SplineAnimation({ sceneUrl = DEFAULT_URL }: SplineAnimationProps) {
  return (
    <iframe
      src={sceneUrl}
      frameBorder='0'
      width='100%'
      height='100%'
      className="w-full h-full scale-150 lg:scale-125"
    ></iframe>
  );
}