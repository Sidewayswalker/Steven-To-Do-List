import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CompletedListItem.css';
import Priority from './Priority/Priority';
import Title from './Title/Title';
import Description from './Description/Description';
import Status from './Status/Status';
// import DueDate from './DueDate/DueDate';


function CompletedListItem() {
  const dispatch = useDispatch();
  const completed_events = useSelector(({ completed_events }) => completed_events);


  useEffect(() => {
    dispatch({ type: 'FETCH_COMPLETED_EVENTS' });
  }, [dispatch]);

  return (
    <div className='Entire_List'>
      {completed_events.map((event) => (
        <div key={event.id} className='List_ItemC'> 
          <Priority prty={event.priority} />
          <Title title={event.event} />
          <Description desc={event.description} />

          
          <div className='Solo_StatusC'>
            <Status status={event.status} />
          </div>
          <div className='Solo_DueDateC'>
            {/* <DueDate dd={event.due_date} /> */}
          </div>
          <div className='BOTH_Status_DueDateC'>
            {/* <DueDate dd={event.due_date} /> */}
            {/* <Status status={event.status} /> */}
          </div>
        </div> 
      ))}
    </div>
  );
}

export default CompletedListItem;
