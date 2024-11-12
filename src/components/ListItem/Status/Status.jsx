import React from 'react';
import './Status.css'; 
import CompleteEventButton from './CompleteEventButton/CompleteEventButton';
import DeleteEventButton from './DeleteEventButton/DeleteEventButton';

const Status = ({ status, selectedId, selectedTitle, selectedDescription, selectedPriority, selectedDueDate}) => {
  return (
    <div className={`status-container`}>
      <span id='The_Status' className={`priority-label priority-${status.toLowerCase()}`}>
        {status}
      </span>
      <div className="button-group">
        <DeleteEventButton deleteId={selectedId} />
        <CompleteEventButton selectedId={selectedId} selectedTitle={selectedTitle} selectedDescription={selectedDescription} selectedPriority={selectedPriority} selectedDueDate={selectedDueDate}/>
      </div>
    </div>
  );
};

export default Status;
