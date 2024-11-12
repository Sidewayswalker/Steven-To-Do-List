import React, { useState } from 'react';
import './CompletedToggle.css';
import List from '../List/List'
import CompletedList from '../CompletedList/CompletedList';


function CompletedToggle() {
    const [toggle, setToggle] = useState(true) 

    const handleClick = () => {
        setToggle(!toggle)
        console.log('current state', toggle)
    }
  
    if (toggle) {
        return (
            <div>
                <button 
                    className='CompleteTaskListButton' 
                    onClick={handleClick}
                    >Completed Task List
                </button>

                <List />
            </div>
        )
    } else {
        return (
            <div>
                <button 
                    className='CompleteTaskListButton' 
                    onClick={handleClick}
                    >Current Task List
                </button>

                <CompletedList />
            </div>
        )
    }
  }
  
  export default CompletedToggle
  