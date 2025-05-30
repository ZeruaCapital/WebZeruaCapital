import { useState, useEffect } from 'react';

export function useAnimatedCounter(target: number, duration = 1200) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    let raf: number;
    
    function animate() {
      start += increment;
      if (start < target) {
        setCount(Math.round(start));
        raf = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }
    
    animate();
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  
  return count;
} 