// Priority.jsx
import React from 'react';
import './Priority.css'; // Optional: create a CSS file for styling

const Priority = ({ prty }) => {
  return (
    <span className={`priority-label priority-${prty.toLowerCase()}`}>
      {prty}
    </span>
  );
};

export default Priority;
