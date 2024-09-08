import React, { useState } from 'react'
import './Reminder.css'

// trim() used for removing extra white spaces

const Reminder = () => {

    const [reminders, setReminders] = useState([]);

    const [newReminder, setNewReminder] = useState('');

    const handleInputChange = (event) => {
        setNewReminder(event.target.value)
    }

    const handleAddReminder = () => {
        if (newReminder.trim) {
            setReminders([...reminders, newReminder]);
            setNewReminder('');
        }
    }

    const handleDeleteReminder = (index) => {
        setReminders(reminders.filter((item, itemIndex) => itemIndex != index))
    }

    return (
        <div className='container'>
            <h1>Reminder App</h1>
            <div className="input-container">
                <input type="text" placeholder='Enter Reminder' onChange={handleInputChange} value={newReminder} />
                <button className='add-btn' onClick={handleAddReminder}>Add Reminder</button>
            </div>

            {
                reminders.length > 0 ? (
                    <ul className='reminder-list'>
                        {
                            reminders.map((reminders, index) => (
                                <li key={index}>{reminders}
                                    <button className='delete-btn' onClick={() => handleDeleteReminder(index)}>Delete</button>
                                </li>

                            ))
                        }
                    </ul>) :
                    <p>No reminders found</p>
            }



        </div>
    )
}

export default Reminder