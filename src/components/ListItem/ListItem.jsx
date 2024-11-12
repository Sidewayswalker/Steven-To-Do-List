import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ListItem.css';
import Priority from './Priority/Priority';
import Title from './Title/Title';
import Description from './Description/Description';
import Status from './Status/Status';
import DueDate from './DueDate/DueDate';

function ListItem() {
  const dispatch = useDispatch();
  const events = useSelector(({ events }) => events);

  useEffect(() => {
    dispatch({ type: 'FETCH_EVENTS' });
    // dispatch({ type: 'FETCH_COMPLETED_EVENTS' }); //! needs to be added. 
  }, [dispatch]);

  const today = new Date(); // Get the current date

  return (
    <div className='Entire_List'>
      {events.map((event) => {
        const dueDate = new Date(event.due_date);
        const isExpired = dueDate < today;

        return (
          <div key={event.id} className={`List_Item ${isExpired ? 'expired' : ''}`}> 
            <Priority prty={event.priority} />
            <Title title={event.event} />
            <Description desc={event.description} />
            
            <div className='Solo_Status'>
              <Status status={event.status} selectedId={event.id} selectedTitle={event.event} selectedDescription={event.description} selectedPriority={event.priority} selectedDueDate={event.due_date}/>
            </div>
            <div className='Solo_DueDate'>
              <DueDate dd={event.due_date} />
            </div>
            <div className='BOTH_Status_DueDate'>
              <DueDate dd={event.due_date} />
              <Status status={event.status} selectedId={event.id} selectedTitle={event.event} selectedDescription={event.description} selectedPriority={event.priority} selectedDueDate={event.due_date}/>
            </div>
          </div> 
        );
      })}
    </div>
  );
}

export default ListItem;
