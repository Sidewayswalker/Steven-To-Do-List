import React from 'react';
import './Description.css'; 

const Description = ({ desc }) => {
  return (
    <span className={`priority-label priority-${desc.toLowerCase()}`}>
      {desc}
    </span>
  );
};

export default Description;