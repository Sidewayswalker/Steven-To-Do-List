import { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch
import './EntryForm.css';

function EntryForm() {
    const dispatch = useDispatch(); // Call useDispatch to get the dispatch function
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [priority, setPriority] = useState('');
    const [eventValue, setEventValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [dueDateValue, setDueDateValue] = useState('');

    // Function to toggle the dropdown //! Priority
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Function to handle priority selection //! Priority
    const handlePrioritySelect = (value) => {
        setPriority(value);
        setIsDropdownOpen(false); // Close the dropdown after selection
    };

    // Function to handle text change //! Event
    const handleEventChange = (event) => {
        const inputValue = event.target.value;

        if (/^[A-Za-z\s]*$/.test(inputValue)) {
            setEventValue(inputValue); 
        }
    };

    // Function to handle text change //! Description
    const handleDescriptionChange = (event) => {
        const inputValue = event.target.value;

        if (/^[A-Za-z\s]*$/.test(inputValue)) {
            setDescriptionValue(inputValue);
        }
    };

    // Function to handle due date change //! Due Date
    const handleDueDateChange = (event) => {
        let inputValue = event.target.value.replace(/\D/g, ''); // Remove any non-numeric characters
    
        // Validate the first digit for month (must be 0 or 1)
        if (inputValue.length > 0 && !/^[01]/.test(inputValue[0])) {
            return; // Exit if the first digit is not 0 or 1
        }

        // If the first digit is 0, the second digit must not be 0. It can only be 1-9.
        if (inputValue.length > 1 && inputValue[0] === '0' && !/^[1-9]/.test(inputValue[1])) {
            return;
        }
    
        // If the first digit is 1, the second digit must be 0, 1, or 2
        if (inputValue.length > 1 && inputValue[0] === '1' && !/^[0-2]/.test(inputValue[1])) {
            return; // Exit if the second digit is not valid for months 10, 11, or 12
        }
    
        // Validate the third digit for day (must be 0, 1, 2, or 3)
        if (inputValue.length > 2 && !/^[0-3]/.test(inputValue[2])) {
            return; // Exit if the third digit is not 0-3
        }
        
        // Validate if the 3rd digit is a 3 then the 4th can only be a '0' or '1'.
        if (inputValue.length > 3 && inputValue[2] === '3' && !/^[0-1]/.test(inputValue[3])) {
            return; // Exit if the third digit is not 0-1
        }
        
        if (inputValue.length >= 8) {
            const year = parseInt(inputValue.slice(4, 8), 10);
            if (year < 2024) {
                return; // Exit if the year is less than 2024
            }
        }
    
        let formattedDate = '';
    
        for (let i = 0; i < inputValue.length; i++) {
            if (i === 2 || i === 4) {
                formattedDate += '/'; // Insert slash after month and day
            }
            if (i < 8) {
                formattedDate += inputValue[i]; // Add each number to formattedDate
            }
        }
        
        setDueDateValue(formattedDate);
    };
    
    const CheckForCompleteForm = () => {
        // Check if all required fields are filled
        if (!priority) {
            alert('Please select a priority.');
            return false; // Changed to return false on failure
        }
        if (!eventValue) {
            alert('Please enter an event name.');
            return false; // Changed to return false on failure
        }
        if (!descriptionValue) {
            alert('Please enter a description.');
            return false; // Changed to return false on failure
        }
        // Check if dueDateValue has exactly 8 digits, including the slashes
        if (dueDateValue.replace(/\D/g, '').length !== 8) {
            alert('Please enter a valid due date in MM/DD/YYYY format.');
            return false; // Changed to return false on failure
        }
        return true; // All checks passed
    };

    // Submit Form to DataBase //! Submit Form
    const SubmitForm = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        
        // Ensure the form is complete before proceeding
        if (!CheckForCompleteForm()) return; 

        const newEventPayload = {
            event: eventValue,
            description: descriptionValue,
            priority: priority,
            status: 'Pending',
            due_date: dueDateValue
        };
        // console.log('New_Event_Payload', newEventPayload);
        dispatch({
            type: 'ADD_ITEM',
            payload: newEventPayload
        });

        // Clear form fields
        setPriority('');
        setEventValue('');
        setDescriptionValue('');
        setDueDateValue('');
    };

    return (
        <form className="Entry_Form" onSubmit={SubmitForm}> {/* Use onSubmit on the form */}
            <h2 className='Create_Item_Title'>Create Item</h2>
            <div className='All_Create_Item_Inputs'>

                {/* //! Priority */}
                <div className="priority_dropdown">
                    <span className='Priority_and_Arrow'>
                        <input className="Entry_Form_Inputs" placeholder="Priority" onClick={toggleDropdown} value={priority} readOnly />
                        <i className='bx bx-chevron-down' onClick={toggleDropdown}></i>
                    </span>

                    {isDropdownOpen && (
                        <div id="myDropdown" className="priority_dropdown-content">
                            <a className='Priority_DropDown_Box_Top' onClick={() => handlePrioritySelect('Low')}>Low</a>
                            <a className='Priority_DropDown_Box_Mid' onClick={() => handlePrioritySelect('Medium')}>Medium</a>
                            <a className='Priority_DropDown_Box_Bot' onClick={() => handlePrioritySelect('High')}>High</a>
                        </div>
                    )}
                </div>
                <div className='Event_Description_Due_Date'>
                    <div className='Event_Input'>   
                        {/* //! Event */}
                        <div>
                            <input
                                className="Entry_Form_Inputs"
                                placeholder="Event"
                                value={eventValue}
                                onChange={handleEventChange}
                            />
                        </div>
                    </div> 
                    <div className='Description_Input'>
                        {/* //! Description */}
                        <div>
                            <input
                                className="Entry_Form_Inputs" 
                                placeholder="Description"
                                value={descriptionValue}
                                onChange={handleDescriptionChange}
                            />
                        </div>
                    </div>
                    <div className='Due_Date_Input'>
                        {/* //! Due Date */}
                        <div>
                            <input 
                                className="Entry_Form_Inputs" 
                                placeholder="Due Date (MM/DD/YYYY)"
                                value={dueDateValue}
                                onChange={handleDueDateChange}
                            /> 
                        </div>
                    </div>
                </div>

            </div>

            {/* //! Submit Form */}
            <div>
                <button className='Submit_Form' type="submit">Submit</button>
            </div>
        </form>
    );
}

export default EntryForm;
