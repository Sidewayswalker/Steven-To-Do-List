import React, { useEffect } from 'react';
import CompletedListItem from '../CompletedListItem/CompletedListItem';
import './CompletedList.css';

function CompletedList() {

    return (
        <div className='List_Box'>
          <div className='List_Subject'>Completed Tasks</div>
          <div className='List_TitlesC'>
            <p>Priority</p>
            <p>Event</p>
            <p>Description</p>
            <p>Status</p>
            {/* <p className='V_Status'>Status</p> */}
            {/* <p className='V_DueDate'>Due Date</p> */}
            <div className='DueDate_Status_TitlesC'>
              {/* <p className='DueDate_Title'>Due Date</p> */}
              {/* <p className='Status_TitleC'>Status</p> */}
            </div>
          </div>
      
          <CompletedListItem />
        </div>
      ); 


}
  
  export default CompletedList
