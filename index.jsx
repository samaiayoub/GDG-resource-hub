import React from 'react';

function MainHub() {
  const colors = ['green', 'red', 'yellow', 'blue'];
  const paths = [];

  // Generate 12 distinct gravity-curved paths, filling spaces including bottom right
  for (let i = 0; i < 12; i++) {
    const color = colors[i % 4];
    const delay = i * 0.8; // Staggered start delays (adjusted for more strings)
    // Spacing: from 50 to 100, step of ~4.17 (50, 54.17, ..., 100) to fill evenly, including bottom right
    const startY = 50 + i * (50 / 11); // Evenly distribute from 50 to 100
    // Control point for downward curve: x around 50-70, y always > startY for gravity pull
    const cpx = 50 + Math.random() * 20; // 50-70 for leftward pull
    const cpy = startY + 20 + Math.random() * 20; // Always below start (startY+20 to +40) for downward bend
    const pathD = `M 100 ${startY} Q ${cpx} ${cpy} 10 100`; // Start at right edge, curve down to bottom-left

    paths.push(
      <path
        key={i}
        d={pathD}
        stroke={color}
        strokeWidth="6" // Skinnier, fixed thickness
        fill="none"
        opacity="0.7"
        clipPath="url(#screen)" // Clip to screen edges
        style={{
          animation: `draw 5s ease-in-out ${delay}s forwards, wiggle 2s ease-in-out ${delay + 5}s infinite alternate`,
        }}
      />
    );
  }

  return (
    <div style={{ 
      position: 'relative', 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: 'white', 
      overflow: 'hidden' 
    }}>
      {/* Centered logos */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '0px' // As close as possible
      }}>
        <img src="1logo.png" alt="Logo 1" style={{ height: '100px', width: 'auto' }} /> {/* Adjust size as needed */}
        <img src="2logo.png" alt="Logo 2" style={{ height: '100px', width: 'auto' }} />
      </div>

      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <clipPath id="screen">
            <rect x="0" y="0" width="100" height="100" />
          </clipPath>
        </defs>
        {paths}
        <style>
          {`
            @keyframes draw {
              0% { stroke-dasharray: 0, 1000; stroke-dashoffset: 0; } /* Large dash to fully cover paths */
              100% { stroke-dasharray: 1000, 0; stroke-dashoffset: -1000; }
            }
            @keyframes wiggle {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(2deg); }
            }
          `}
        </style>
      </svg>
    </div>
  );
}

export default MainHub;
