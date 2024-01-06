import confetti from "canvas-confetti";
import { useEffect, useRef } from "react";

interface ConfittiOptions {}

export const Fireworks = ({
  active,
  config,
}: {
  active: boolean;
  config: ConfittiOptions;
}) => {
  const canvasRef = useRef<any>(null);

  useEffect(() => {
    var confettiCanon = confetti.create(canvasRef?.current, {
      resize: true,
      useWorker: true,
      disableForReducedMotion: true,
    });

    confettiCanon(config);

    return () => {
      confettiCanon.reset();
    };
  }, []);

  return (
    <div>
      {active && (
        <canvas
          ref={canvasRef}
          style={{
            position: "fixed",
            inset: 0,
            width: "full",
            height: "full",
            zIndex: 9999,
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
};
