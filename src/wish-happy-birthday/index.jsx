import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { useWidgetProps } from "../use-widget-props";

function BirthdayWish() {
  const props = useWidgetProps({});
  console.log("Widget props received:", props);
  
  const recipientName = props?.recipientName || "Friend";
  const [isClicked, setIsClicked] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  const [colorIndex, setColorIndex] = useState(0);
  
  const colors = [
    'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
    'linear-gradient(135deg, #4ecdc4, #44a08d)',
    'linear-gradient(135deg, #f093fb, #f5576c)',
    'linear-gradient(135deg, #4facfe, #00f2fe)',
    'linear-gradient(135deg, #43e97b, #38f9d7)',
    'linear-gradient(135deg, #fa709a, #fee140)'
  ];
  
  const emojis = ['🎉', '🎂', '🎈', '🎁', '✨', '🌟', '🎊', '🥳'];
  
  // Removed auto color changing
  
  const handleClick = () => {
    setIsClicked(true);
    
    // Create sparkles
    const newSparkles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      emoji: emojis[Math.floor(Math.random() * emojis.length)]
    }));
    
    setSparkles(newSparkles);
    
    setTimeout(() => {
      setSparkles([]);
      setIsClicked(false);
    }, 1000);
  };
  
  return (
    <div 
      onClick={handleClick}
      style={{ 
        padding: '40px', 
        borderRadius: '20px',
        textAlign: 'center',
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#fff',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        transform: isClicked ? 'scale(1.05)' : 'scale(1)',
        boxShadow: isClicked 
          ? '0 20px 40px rgba(255, 107, 107, 0.4), 0 0 0 20px rgba(255, 107, 107, 0.1)' 
          : '0 10px 30px rgba(0,0,0,0.2)',
        background: colors[0],
        userSelect: 'none'
      }}
    >
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        @keyframes rainbow {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        
        @keyframes sparkle {
          0% { 
            transform: scale(0) rotate(0deg);
            opacity: 1;
          }
          100% { 
            transform: scale(1.5) rotate(180deg);
            opacity: 0;
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}</style>
      
      <div style={{
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        position: 'relative',
        zIndex: 2
      }}>
        🎉 Happy Birthday, {recipientName}! 🎂
      </div>
      
      {/* Static emojis */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '20px',
        fontSize: '20px'
      }}>🎈</div>
      
      <div style={{
        position: 'absolute',
        top: '15px',
        right: '25px',
        fontSize: '18px'
      }}>🎁</div>
      
      <div style={{
        position: 'absolute',
        bottom: '15px',
        left: '30px',
        fontSize: '16px'
      }}>✨</div>
      
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        fontSize: '22px'
      }}>🌟</div>
      
      {/* Sparkles effect */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          style={{
            position: 'absolute',
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            fontSize: '24px',
            animation: 'sparkle 1s ease-out forwards',
            pointerEvents: 'none',
            zIndex: 3
          }}
        >
          {sparkle.emoji}
        </div>
      ))}
      
      {/* Removed shimmer effect */}
      
      <style>{`
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
}

createRoot(document.getElementById("wish-happy-birthday-root")).render(<BirthdayWish />);
