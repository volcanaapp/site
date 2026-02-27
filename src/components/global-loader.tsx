"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { LoadingScreen } from "./loading-screen";

export function GlobalLoader() {
  const pathname = usePathname();
  const [shouldRender, setShouldRender] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    // Function to handle the sequence of showing -> fading out -> unmounting
    const handleLoading = (duration: number) => {
      setShouldRender(true);
      setIsVisible(true);

      const fadeOutTimer = setTimeout(() => {
        setIsVisible(false);
        
        const unmountTimer = setTimeout(() => {
          setShouldRender(false);
        }, 500); // Wait for transition to finish (500ms)

        return () => clearTimeout(unmountTimer);
      }, duration);

      return () => clearTimeout(fadeOutTimer);
    };

    // Determine duration based on whether it's the first load or a navigation
    // Note: In React Strict Mode (Dev), this might run twice, but behavior should be acceptable.
    const duration = isFirstLoad.current ? 2000 : 800;
    
    // Update ref after determining duration for this run
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
    }

    const cleanup = handleLoading(duration);
    
    return () => {
      cleanup();
    };
  }, [pathname]);

  if (!shouldRender) return null;

  return (
    <LoadingScreen 
      className={`transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
    />
  );
}
