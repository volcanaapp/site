"use client";

import { useState, useEffect } from 'react';

interface UseTypewriterReturn {
  displayText: string;
  isDone: boolean;
}

export const useTypewriter = (
  text: string,
  speed: number = 50,
  start: boolean = false
): UseTypewriterReturn => {
  const [displayText, setDisplayText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!start || !text) {
      setDisplayText('');
      setIsDone(false);
      return;
    }

    let i = 0;
    setDisplayText('');
    setIsDone(false);

    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsDone(true);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed, start]);

  return { displayText, isDone };
};