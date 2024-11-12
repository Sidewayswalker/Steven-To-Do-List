import React from 'react';
import { useDispatch } from 'react-redux';
import './DeleteEventButton.css'; 

const DeleteEventButton = ({ deleteId }) => {
  const dispatch = useDispatch();

  const handleDeleteEvent = () => {
    dispatch({ type: 'DELETE_EVENT', payload: deleteId });
  };

  return (
    <button className="delete-button" onClick={handleDeleteEvent}>❌</button>
  );
};

export default DeleteEventButton;
