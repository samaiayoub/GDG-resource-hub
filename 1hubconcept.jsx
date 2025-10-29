import React, { useState } from 'react';

function App() {
  const [inverted, setInverted] = useState(false);

  const handleClick = () => {
    setInverted(!inverted);
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      backgroundColor: '#f0f0f0' 
    }}>
      <div style={{ 
        position: 'relative', 
        width: '400px', 
        height: '200px', 
        marginBottom: '20px'
      }}>
        <img 
          src="logoright.png" 
          alt="Logo Right" 
          style={{ 
            position: 'absolute', 
            width: '200px', // hadi tania
            height: '200px', // matnsach
            transition: 'left 0.5s ease-in-out', 
            left: inverted ? '0px' : '200px' 
          }} 
        />
        <img 
          src="logoleft.png" 
          alt="Logo Left" 
          style={{ 
            position: 'absolute', 
            width: '200px', // hadi q3
            height: '200px', // adjustiha mb3d 
            transition: 'left 0.5s ease-in-out', 
            left: inverted ? '200px' : '0px' 
          }} 
        />
      </div>
      <button 
        onClick={handleClick} 
        style={{ 
          padding: '10px 20px', 
          fontSize: '16px', 
          cursor: 'pointer' 
        }}
      >
        BROWSE DEPARTMENTS
      </button>
    </div>
  );
}

export default App;
