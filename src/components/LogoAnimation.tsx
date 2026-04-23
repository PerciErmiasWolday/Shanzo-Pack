import { useEffect, useState } from 'react';

interface LogoAnimationProps {
  onAnimationComplete: () => void;
}

export default function LogoAnimation({ onAnimationComplete }: LogoAnimationProps) {
  const [animationStage, setAnimationStage] = useState<'initial' | 'animating' | 'complete'>('initial');

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem('shanzo-intro-shown');

    if (hasSeenAnimation) {
      onAnimationComplete();
      return;
    }

    const startTimer = setTimeout(() => {
      setAnimationStage('animating');
    }, 300);

    const completeTimer = setTimeout(() => {
      setAnimationStage('complete');
      sessionStorage.setItem('shanzo-intro-shown', 'true');
      onAnimationComplete();
    }, 2300);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(completeTimer);
    };
  }, [onAnimationComplete]);

  if (animationStage === 'complete') {
    return null;
  }

  const isInitial = animationStage === 'initial';

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div
        className={`absolute inset-0 bg-white transition-opacity duration-1000 ${
          isInitial ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        className={`absolute transition-all duration-[1500ms] ease-out ${
          isInitial
            ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[2]'
            : 'top-[35vh] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100'
        }`}
      >
        <img
          src="/ChatGPT Image Oct 30, 2025, 03_38_45 PM.png"
          alt="Shanzo Pack"
          className="h-40 sm:h-52 w-auto"
        />
      </div>
    </div>
  );
}
