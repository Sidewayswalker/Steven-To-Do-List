import React from 'react';
import './Title.css'; 

const Title = ({ title }) => {
  return (
    <span className={`priority-label priority-${title.toLowerCase()}`}>
      {title}
    </span>
  );
};

export default Title;
