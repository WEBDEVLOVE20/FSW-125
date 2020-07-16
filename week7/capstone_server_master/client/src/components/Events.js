import React, { useState } from 'react'
import AddEvents from './AddEvents.js'

function Events(props){
    const { event, description, completed, date, itemsNeeded, _id } = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className="list-container">
        { !editToggle ?
        <> 
            <h1>Event: { event }</h1>
            <h3>Details: { description }</h3>
            <h3>Completed: {completed ? "Yes" : "No"}</h3>
            <h3>Date of Event: { date }</h3>
            <h3>Items: { itemsNeeded }</h3>
            <button
                className="delete-btn"
                onClick={() => props.deleteEvent(_id)}>
                Delete
            </button>
            <button
                className="edit-btn"
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Edit
            </button>
        </>
        :
        <>
            <AddEvents
                event={event}
                description={description}
                completed={completed ? "Yes" : "No"}
                date={date}
                itemsNeeded={itemsNeeded}
                _id={_id}
                btnText="Submit Edit" 
                submit={props.editEvent}
            />
            <button
                className="delete-btn"
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Close
            </button>
        </>
        }
        </div>
    )
}

export default Events;