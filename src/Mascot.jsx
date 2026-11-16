
import { useState } from 'react';
import './Mascot.css';

function Mascot({ directions, size = 120 }) {
  const [directionFrame, setDirectionFrame] = useState(4);

  const handlePointerMove = (event) => {
    if (event.pointerType === 'touch') return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const column = x < 0.33 ? 0 : x > 0.67 ? 2 : 1;
    const row = y < 0.33 ? 0 : y > 0.67 ? 2 : 1;

    setDirectionFrame(row * 3 + column);
  };

  const handlePointerLeave = () => {
    setDirectionFrame(4);
  };

  if (!directions) return null;

  const row = Math.floor(directionFrame / 3);
  const column = directionFrame % 3;

  return (
    <div
      className="pixora-mascot"
      style={{
        width: size,
        height: size,
        backgroundImage: `url("${directions}")`,
        backgroundSize: '300% 300%',
        backgroundPosition: `${column * 50}% ${row * 50}%`,
        backgroundRepeat: 'no-repeat',
        transition: 'none',
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-label="Interactive Pixora mascot"
      role="img"
    />
  );
}

export default Mascot;
