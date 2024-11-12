import ListItem from '../ListItem/ListItem';
import './List.css';

function List() {

  return (
    <div className='List_Box'>
      <div className='List_Subject'>Current Tasks</div>
      <div className='List_Titles'>
        <p>Priority</p>
        <p>Event</p>
        <p>Description</p>
        <p className='V_Status'>Status</p>
        <p className='V_DueDate'>Due Date</p>
        <div className='DueDate_Status_Titles'>
          <p className='DueDate_Title'>Due Date</p>
          <p className='Status_Title'>Status</p>
        </div>
      </div>
  
      <ListItem />
    </div>
  );  
}

export default List;
