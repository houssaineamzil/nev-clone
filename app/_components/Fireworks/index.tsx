import confetti from "canvas-confetti";
import { useEffect, useRef } from "react";

export const Fireworks = ({
  active,
  options,
}: {
  active: boolean;
  options: confetti.Options;
}) => {
  const canvasRef = useRef<any>(null);

  useEffect(() => {
    var confettiCanon = confetti.create(canvasRef?.current, {
      resize: true,
      useWorker: true,
      disableForReducedMotion: true,
    });

    confettiCanon(options);

    return () => {
      confettiCanon.reset();
    };
  }, []);

  return (
    <div>
      {active && (
        <canvas
          ref={canvasRef}
          
        />
      )}
    </div>
  );
};
