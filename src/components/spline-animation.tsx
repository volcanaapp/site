"use client";

import Spline from '@splinetool/react-spline';
import { useState, useEffect } from 'react';

interface SplineAnimationProps {
  sceneUrl?: string;
}

const DEFAULT_URL = 'https://my.spline.design/untitled-8sPGLwy4MxIBJMzD9L84K60v/';

export default function SplineAnimation({ sceneUrl = DEFAULT_URL }: SplineAnimationProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Wait for a short period to ensure the DOM is fully stable before rendering
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 500); // 500ms delay for stability

    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return <div className="w-full h-full bg-muted/20 animate-pulse rounded-lg" />;
  }

  return (
    <Spline
      scene={sceneUrl}
      className="w-full h-full"
    />
  );
}