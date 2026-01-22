// src/components/common/Toast.jsx
import React, { useEffect } from 'react';

const Toast = ({ message, type, onClose }) => {
  // Auto close after 5 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  // Set color based on type
  const backgroundColor =
    type === 'success' ? '#4CAF50' :
    type === 'info' ? '#2196F3' :
    type === 'error' ? '#f44336' :
    '#333';

  return (
    <div
      className={`toast ${type}`}
      style={{
        position: 'fixed',
        top: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '12px 20px',
        backgroundColor,
        color: 'white',
        borderRadius: '5px',
        zIndex: 9999,
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
        minWidth: '300px',
        textAlign: 'center',
        fontWeight: 'bold',
      }}
    >
      {message}
      <span
        style={{ marginLeft: 15, cursor: 'pointer', fontWeight: 'bold' }}
        onClick={onClose}
      >
        ×
      </span>
    </div>
  );
};

export default Toast;
