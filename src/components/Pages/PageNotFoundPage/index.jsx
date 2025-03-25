import React, { useState, useEffect } from 'react';

const PageNotFoundPage = () => {
  const [iconCount, setIconCount] = useState(0);

  useEffect(() => {
    const calculateIcons = () => {
      const iconSize = 96;
      const cols = Math.max(3, Math.ceil(window.innerWidth / iconSize)); // 🔒 minimum 3 columns
      const rows = Math.max(6, Math.ceil(window.innerHeight / iconSize)); // 🔒 minimum 6 rows
      setIconCount(cols * rows);
    };

    calculateIcons();
    window.addEventListener('resize', calculateIcons);
    return () => window.removeEventListener('resize', calculateIcons);
  }, []);

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
      a:hover {
        transform: scale(1.05);
        box-shadow: 0 0 20px rgba(255, 62, 154, 0.6);
      }
      @media (min-width: 768px) {
      .pagenotfound-header {
      font-size: 3.2rem !important;
      }
      .pagenotfound-text {
      font-size: 2rem !important;
      }
      .pagenotfound-button {
      font-size: 2rem !important;
      padding: 1rem 1.5rem !important;
      }
    }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
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
    button: {
      marginTop: '2rem',
      padding: '0.75rem 1rem',
      backgroundColor: '#ff3e9a',
      color: '#1a1a24',
      fontWeight: 600,
      fontSize: '1.2rem',
      borderRadius: '9999px',
      textDecoration: 'none',
      boxShadow: '0 0 10px rgba(255, 62, 154, 0.4)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      cursor: 'pointer',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
      gridAutoRows: '80px',
      gap: '2rem',
      padding: '2rem',
      width: '100%',
      overflow: 'hidden',
      height: '100%',
      boxSizing: 'border-box',
    },
    iconContainer: {
      position: 'relative',
      height: '2.5rem',
      width: '2.5rem',
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
      width: '80%',
      height: '80%',
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
      marginBottom: '2rem',
      color: '#ff3e9a',
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    textHeader: {
      marginTop: '1.5rem',
      marginBottom: '1rem',
      color: '#ff3e9a',
      fontSize: '2.7rem',
      fontWeight: 800,
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
      fontSize: '1.5rem',
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

      {/* Center loading content */}
      <div style={styles.contentBox}>
        <p style={styles.textHeader} className="pagenotfound-header">404 Error ‼️</p>
        <p style={styles.text} className="pagenotfound-text">Sorry, Page Not Found!</p>

        <img
          src="/favicon.png"
          alt="Your Music Stats"
          style={{
            ...styles.mainIcon,
            animation: 'bounce 2s infinite',
          }}
        />

        <a href="/public" style={styles.button} className="pagenotfound-button">Back to Home</a>
      </div>
    </div>
  );
};

export default PageNotFoundPage;