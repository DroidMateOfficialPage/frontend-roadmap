import { useMemo } from "react";

export function Snowfall({ count = 50 }: { count?: number }) {
  const flakes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 14 + 6,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * -20,
        opacity: Math.random() * 0.6 + 0.3,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-[45] overflow-hidden" aria-hidden="true">
      {flakes.map((f) => (
        <span
          key={f.id}
          className="snowflake"
          style={{
            left: `${f.left}%`,
            fontSize: `${f.size}px`,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            opacity: f.opacity,
          }}
        >
          ❄
        </span>
      ))}
    </div>
  );
}
