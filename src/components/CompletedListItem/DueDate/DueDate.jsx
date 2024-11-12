import React from 'react';
import './DueDate.css'; 

const DueDate = ({ dd }) => {
  // Format the due date in "Month Day" format
  const formatDueDate = (dueDate) => {
    const date = new Date(dueDate);
    const options = { month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  // Format the due date in "MM/DD" format
  const formatShortDate = (dueDate) => {
    const date = new Date(dueDate);
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero for month
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero for day
    return `${month}/${day}`;
  };

  // Ensure dd is a valid date string before formatting
  const formattedDate = dd ? formatDueDate(dd) : 'Invalid Date';
  const shortFormattedDate = dd ? formatShortDate(dd) : 'Invalid Date';

  return (
    <div>
      <span id='Long_Date' className={`priority-label priority-${dd ? dd.toLowerCase() : 'unknown'}`}>
        {formattedDate} {/* Long format date */}
      </span>
      <span className='Short_Date'>{shortFormattedDate} {/* Short format date (mm/dd) */}</span>
    </div>
  );
};

export default DueDate;
