import React from 'react';
import { useDispatch } from 'react-redux';
import './CompleteEventButton.css'; 


const CompleteEventButton = ({selectedId, selectedTitle, selectedDescription, selectedPriority, selectedDueDate}) => {
  const dispatch = useDispatch();

  const handleCompleteEvent = () => {
    let bundledData = {
      id: selectedId,
      event: selectedTitle,
      description: selectedDescription,
      priority: selectedPriority,
      due_date: selectedDueDate
    };    
    console.log('selected id', bundledData)

    //! POST data to "completed_events" table.
    //! GET data from "completed_events" table.
    dispatch({ type: 'ADD_ITEM_TO_COMPLETED_EVENTS', payload: bundledData });

    //! DELETE id from "events" table.
    //! GET "events" table.
    // dispatch({ type: 'DELETE_EVENT', payload: selectedId });
  }

  
  return (
    <button className="complete-button" onClick={handleCompleteEvent}>✓</button>
  );
};

export default CompleteEventButton;
