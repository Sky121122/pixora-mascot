
import { useEffect, useState } from 'react';
import './Mascot.css';

function Mascot({
  directions,
  size = 120,
}) {
  const [directionFrame, setDirectionFrame] = useState(4);

  useEffect(() => {
    if (!directions) return;

    const handleMouseMove = (event) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;

      const column = x < 0.33 ? 0 : x > 0.67 ? 2 : 1;
      const row = y < 0.33 ? 0 : y > 0.67 ? 2 : 1;

      setDirectionFrame(row * 3 + column);
    };

    const handleMouseLeave = () => {
      setDirectionFrame(4);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [directions]);

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
      aria-label="Interactive Pixora mascot"
      role="img"
    />
  );
}

export default Mascot;
