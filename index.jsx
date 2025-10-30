New Chat
65 lines

import React from 'react';
function MainHub() {
  return (
    <div style={{ 
      position: 'relative', 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: 'white', 
      overflow: 'hidden' 
    }}>
      {/* Green Strings */}
      <div className="string green" style={{ top: '50%', left: '100%', transformOrigin: '0 0' }}></div>
      <div className="string green" style={{ top: '52%', left: '100%', transformOrigin: '0 0', animationDelay: '0.5s' }}></div>
      <div className="string green" style={{ top: '48%', left: '100%', transformOrigin: '0 0', animationDelay: '1s' }}></div>
      <div className="string green" style={{ top: '54%', left: '100%', transformOrigin: '0 0', animationDelay: '1.5s' }}></div>
      <div className="string green" style={{ top: '46%', left: '100%', transformOrigin: '0 0', animationDelay: '2s' }}></div>
      {/* Red Strings */}
      <div className="string red" style={{ top: '50%', left: '100%', transformOrigin: '0 0', animationDelay: '0.2s' }}></div>
      <div className="string red" style={{ top: '52%', left: '100%', transformOrigin: '0 0', animationDelay: '0.7s' }}></div>
      <div className="string red" style={{ top: '48%', left: '100%', transformOrigin: '0 0', animationDelay: '1.2s' }}></div>
      <div className="string red" style={{ top: '54%', left: '100%', transformOrigin: '0 0', animationDelay: '1.7s' }}></div>
      <div className="string red" style={{ top: '46%', left: '100%', transformOrigin: '0 0', animationDelay: '2.2s' }}></div>
      {/* Yellow Strings */}
      <div className="string yellow" style={{ top: '50%', left: '100%', transformOrigin: '0 0', animationDelay: '0.4s' }}></div>
      <div className="string yellow" style={{ top: '52%', left: '100%', transformOrigin: '0 0', animationDelay: '0.9s' }}></div>
