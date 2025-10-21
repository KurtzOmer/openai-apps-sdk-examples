import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { useWidgetProps } from "../use-widget-props";

function ShabbatShalom() {
  const props = useWidgetProps({});
  console.log("Widget props received:", props);
  
  const recipientName = props?.recipientName || "Friend";
  const [isClicked, setIsClicked] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  
  const emojis = ['✨', '🌟', '🕯️', '🍷', '🍞', '🌸', '🌺', '🌼'];
  
  const handleClick = () => {
    setIsClicked(true);
    
    // Create sparkles
    const newSparkles = Array.from({ length: 6 }, (_, i) => ({
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
        padding: '50px 40px', 
        borderRadius: '30px',
        textAlign: 'center',
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#2c3e50',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        transform: isClicked ? 'scale(1.02)' : 'scale(1)',
        boxShadow: isClicked 
          ? '0 25px 50px rgba(52, 152, 219, 0.3), 0 0 0 15px rgba(52, 152, 219, 0.1)' 
          : '0 15px 35px rgba(0,0,0,0.15)',
        background: 'linear-gradient(135deg, #e8f4fd, #d1ecf1, #bee5eb)',
        userSelect: 'none',
        fontFamily: 'serif'
      }}
    >
      <style>{`
        @keyframes sparkle {
          0% { 
            transform: scale(0) rotate(0deg);
            opacity: 1;
          }
          100% { 
            transform: scale(1.3) rotate(180deg);
            opacity: 0;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
      
      {/* Floral border decoration */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '15px',
        fontSize: '24px',
        animation: 'float 3s ease-in-out infinite'
      }}>🌸</div>
      
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        fontSize: '20px',
        animation: 'float 2.5s ease-in-out infinite',
        animationDelay: '0.5s'
      }}>🌺</div>
      
      <div style={{
        position: 'absolute',
        bottom: '15px',
        left: '25px',
        fontSize: '18px',
        animation: 'float 2.8s ease-in-out infinite',
        animationDelay: '1s'
      }}>🌼</div>
      
      <div style={{
        position: 'absolute',
        bottom: '25px',
        right: '15px',
        fontSize: '22px',
        animation: 'float 3.2s ease-in-out infinite',
        animationDelay: '1.5s'
      }}>🌻</div>
      
      {/* Shabbat elements */}
      <div style={{
        position: 'absolute',
        top: '30px',
        left: '50px',
        fontSize: '28px'
      }}>🕯️</div>
      
      <div style={{
        position: 'absolute',
        top: '35px',
        right: '50px',
        fontSize: '24px'
      }}>🍷</div>
      
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '26px'
      }}>🍞</div>
      
      {/* Main Hebrew text */}
      <div style={{
        textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
        position: 'relative',
        zIndex: 2,
        marginBottom: '10px',
        background: 'linear-gradient(45deg, #f39c12, #e67e22, #d35400)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontSize: '36px',
        fontWeight: '900',
        letterSpacing: '2px'
      }}>
        שבת שלום
      </div>
      
      {/* English translation */}
      <div style={{
        fontSize: '18px',
        color: '#34495e',
        marginBottom: '15px',
        fontStyle: 'italic'
      }}>
        Shabbat Shalom, {recipientName}!
      </div>
      
      {/* Decorative line */}
      <div style={{
        width: '60%',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #f39c12, transparent)',
        margin: '0 auto 20px',
        borderRadius: '1px'
      }}></div>
      
      {/* Blessing text */}
      <div style={{
        fontSize: '14px',
        color: '#7f8c8d',
        fontStyle: 'italic',
        lineHeight: '1.4',
        marginBottom: '20px'
      }}>
        May your Shabbat be filled with peace, joy, and blessings
      </div>
      
      {/* Shabbat greetings in different languages */}
      <div style={{
        width: '100%',
        maxWidth: '400px',
        margin: '20px auto 0',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 12px 25px rgba(0,0,0,0.15)',
        background: 'linear-gradient(135deg, #e8f4fd, #d1ecf1)',
        padding: '20px',
        transition: 'transform 0.3s ease',
        transform: isClicked ? 'scale(1.02)' : 'scale(1)'
      }}>
        {/* Hebrew text */}
        <div style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#2c3e50',
          marginBottom: '15px',
          textAlign: 'center',
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
        }}>
          שבת שלום
        </div>
        
        {/* Shabbat elements */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          margin: '15px 0',
          fontSize: '20px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>🕯️</div>
            <div style={{ fontSize: '10px', color: '#7f8c8d' }}>Candles</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>🍷</div>
            <div style={{ fontSize: '10px', color: '#7f8c8d' }}>Wine</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>🍞</div>
            <div style={{ fontSize: '10px', color: '#7f8c8d' }}>Challah</div>
          </div>
        </div>
        
        {/* Greetings in different languages */}
        <div style={{
          fontSize: '12px',
          color: '#34495e',
          lineHeight: '1.6',
          textAlign: 'center',
          marginTop: '15px'
        }}>
          <div style={{ fontWeight: 'bold', marginBottom: '8px', color: '#2c3e50' }}>
            Shabbat Shalom in Different Languages:
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
            <div><strong>Spanish:</strong> Feliz Sabado</div>
            <div><strong>French:</strong> Bon Sabbat</div>
            <div><strong>Greek:</strong> Kalo Savato</div>
            <div><strong>Italian:</strong> Felice Sabato</div>
            <div><strong>Portuguese:</strong> Feliz Sábado</div>
            <div><strong>German:</strong> Glucklich Sabbat</div>
            <div><strong>Russian:</strong> счастливым шабатом</div>
            <div><strong>Arabic:</strong> سبت سعيد</div>
            <div><strong>Chinese:</strong> 安息日快乐</div>
            <div><strong>Japanese:</strong> ハッピー・サバス</div>
            <div><strong>Korean:</strong> 행복한 안식일</div>
            <div><strong>Swahili:</strong> Sabato Njema</div>
          </div>
        </div>
        
        {/* Floral decorations */}
        <div style={{
          position: 'absolute',
          top: '5px',
          left: '10px',
          fontSize: '16px'
        }}>🌸</div>
        
        <div style={{
          position: 'absolute',
          top: '8px',
          right: '10px',
          fontSize: '14px'
        }}>🌺</div>
        
        <div style={{
          position: 'absolute',
          bottom: '8px',
          left: '15px',
          fontSize: '12px'
        }}>🌼</div>
        
        <div style={{
          position: 'absolute',
          bottom: '5px',
          right: '15px',
          fontSize: '15px'
        }}>🌻</div>
        
        {/* Subtle background pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 70%, rgba(52, 152, 219, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(155, 89, 182, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: 1
        }}></div>
      </div>
      
      {/* Sparkles effect */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          style={{
            position: 'absolute',
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            fontSize: '20px',
            animation: 'sparkle 1s ease-out forwards',
            pointerEvents: 'none',
            zIndex: 3
          }}
        >
          {sparkle.emoji}
        </div>
      ))}
      
      {/* Subtle background pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(52, 152, 219, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(155, 89, 182, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none',
        zIndex: 1
      }}></div>
    </div>
  );
}

createRoot(document.getElementById("shabbat-shalom-root")).render(<ShabbatShalom />);
