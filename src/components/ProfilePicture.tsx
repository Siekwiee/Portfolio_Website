import React from 'react';

interface ProfilePictureProps {
  size?: number;
  name?: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ 
  size = 300, 
  name = "J"
}) => {
  const containerStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #001219 0%, #005f73 40%, #0a9396 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
  };

  const createShapeStyle = (rotation: number, scale: number, delay: number): React.CSSProperties => ({
    position: 'absolute',
    width: `${size * 0.8}px`,
    height: `${size * 0.8}px`,
    border: '2px solid rgba(148, 210, 189, 0.15)',
    transform: `rotate(${rotation}deg) scale(${scale})`,
    animation: `float ${3 + delay}s ease-in-out infinite`,
    animationDelay: `${delay}s`,
  });

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 30% 30%, rgba(148, 210, 189, 0.2) 0%, rgba(0, 18, 25, 0) 70%)',
  };

  const dotGridStyle: React.CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: `
      radial-gradient(circle, rgba(148, 210, 189, 0.15) 1px, transparent 1px) 0 0 / ${size * 0.1}px ${size * 0.1}px
    `,
    opacity: 0.5,
    animation: 'pulse 4s ease-in-out infinite',
  };

  const circleStyle: React.CSSProperties = {
    position: 'absolute',
    width: `${size * 0.2}px`,
    height: `${size * 0.2}px`,
    borderRadius: '50%',
    background: 'rgba(148, 210, 189, 0.1)',
    filter: 'blur(8px)',
    animation: 'float 5s ease-in-out infinite',
  };

  const letterContainerStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 2,
    width: `${size * 0.4}px`,
    height: `${size * 0.4}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(148, 210, 189, 0.1)',
    borderRadius: '12px',
    backdropFilter: 'blur(4px)',
    border: '1px solid rgba(148, 210, 189, 0.2)',
    animation: 'pulse 3s ease-in-out infinite',
  };

  const letterStyle: React.CSSProperties = {
    color: '#94d2bd',
    fontSize: `${size * 0.25}px`,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.05); }
          }
        `}
      </style>
      <div style={dotGridStyle} />
      <div style={{...circleStyle, top: '20%', left: '20%'}} />
      <div style={{...circleStyle, bottom: '20%', right: '20%'}} />
      <div style={{...createShapeStyle(0, 1, 0), borderRadius: '20%'}} />
      <div style={{...createShapeStyle(45, 0.8, 0.5), borderRadius: '30%'}} />
      <div style={{...createShapeStyle(-45, 0.6, 1), borderRadius: '40%'}} />
      <div style={overlayStyle} />
      <div style={letterContainerStyle}>
        <span style={letterStyle}>{name}</span>
      </div>
    </div>
  );
};

export default ProfilePicture; 