'use client';

import { useEffect, useRef } from 'react';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

const STATE_MACHINE = 'eyeAnimation';

export function EyeRive() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { RiveComponent, rive } = useRive({
    src: '/eyeanimation.riv',
    stateMachines: STATE_MACHINE,
    autoplay: true,
  });

  const hoverInput = useStateMachineInput(rive, STATE_MACHINE, 'hover');
  const hoveredInput = useStateMachineInput(rive, STATE_MACHINE, 'hovered');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onEnter = () => {
      if (hoverInput) hoverInput.value = true;
      if (hoveredInput) hoveredInput.value = true;
    };
    const onLeave = () => {
      if (hoverInput) hoverInput.value = false;
      if (hoveredInput) hoveredInput.value = false;
    };
    container.addEventListener('mouseenter', onEnter);
    container.addEventListener('mouseleave', onLeave);
    return () => {
      container.removeEventListener('mouseenter', onEnter);
      container.removeEventListener('mouseleave', onLeave);
    };
  }, [hoverInput, hoveredInput]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: '21 / 7' }}
    >
      {/* 
        Aumentamos el tamaño físico del contenedor en lugar de usar transform: scale 
        para que Rive renderice los vectores a alta resolución real y no se pixelice el canvas.
      */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
        style={{ width: '210%', height: '210%' }}
      >
        <RiveComponent style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
}
