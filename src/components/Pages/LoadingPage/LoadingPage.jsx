import React, { useState, useEffect } from 'react';

const LoadingPage = ({ loadingText = "Loading your music stats..." }) => {
  const [progress, setProgress] = useState(0);
  const [iconCount, setIconCount] = useState(0);

  useEffect(() => {
    const calculateIcons = () => {
      const iconSize = 96;
      const cols = Math.ceil(window.innerWidth / iconSize);
      const rows = Math.ceil(window.innerHeight / iconSize);
      setIconCount(cols * rows);
    };

    calculateIcons();
    window.addEventListener('resize', calculateIcons);
    return () => window.removeEventListener('resize', calculateIcons);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 5;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const styles = {
    container: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: '#1a1a24',
      overflow: 'hidden',
    },
    backgroundPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
      opacity: 0.1,
      width: '100%',
      height: '100%',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
      gridAutoRows: '80px',
      gap: '2rem',
      padding: '2rem',
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
    },
    iconContainer: {
      position: 'relative',
      height: '3rem',
      width: '3rem',
    },
    icon: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
    contentBox: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      borderRadius: '0.5rem',
      backgroundColor: 'rgba(26, 26, 36, 0.8)',
      backdropFilter: 'blur(4px)',
      width: 'min(500px, 90vw)',
    },
    mainIcon: {
      width: '100%',
      height: '100%',
      marginBottom: '1.5rem',
      animation: 'bounce 2s infinite',
    },
    spinner: {
      width: '3rem',
      height: '3rem',
      border: '0.25rem solid rgba(255, 62, 154, 0.3)',
      borderTop: '0.25rem solid #ff3e9a',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    },
    text: {
      marginTop: '1.5rem',
      color: '#ff3e9a',
      fontSize: '2rem',
      fontWeight: 500,
    },
    progressContainer: {
      width: '100%',
      maxWidth: '20rem',
      marginTop: '1.5rem',
    },
    progressBar: {
      height: '0.5rem',
      backgroundColor: '#2a2a34',
      borderRadius: '9999px',
    },
    progressFill: {
      height: '100%',
      backgroundColor: '#ff3e9a',
      borderRadius: '9999px',
      transition: 'width 0.3s ease-in-out',
    },
    progressText: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '0.5rem',
      color: '#ff3e9a',
      fontSize: '0.875rem',
      fontWeight: 500,
    },
    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
    '@keyframes bounce': {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    },
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={styles.container}>
      {/* Background pattern with favicon */}
      <div style={styles.backgroundPattern}>
        <div style={styles.grid}>
          {Array.from({ length: iconCount }).map((_, index) => (
            <div
              key={index}
              style={{
                ...styles.iconContainer,
                animation: 'pulse 3s infinite',
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <img
                src="/favicon.png"
                alt="favicon"
                style={styles.icon}
              />
            </div>
          ))}
        </div>
      </div>

      <div style={styles.contentBox}>
        <img
          src="/favicon.png"
          alt="Your Music Stats"
          style={{
            ...styles.mainIcon,
            animation: 'bounce 2s infinite',
          }}
        />

        <div
          style={{
            ...styles.spinner,
            animation: 'spin 1s linear infinite',
          }}
        />

        <p style={styles.text}>{loadingText}</p>

        <div style={styles.progressContainer}>
          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                width: `${progress}%`,
              }}
            />
          </div>
          <div style={styles.progressText}>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;