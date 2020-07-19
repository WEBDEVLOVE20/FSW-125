import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Events from './components/Events.js'
import AddEvents from './components/AddEvents.js'

function App() {
    const [events, setEvents] = useState([])

    const getEvents = (() => {
        axios.get("http://localhost:8000/events")
            .then(res => setEvents(res.data))
            .catch(err => console.log(err))
    })
    
    const addEvent = ((newEvent) => {
        axios.post("http://localhost:8000/events", newEvent)
            .then(res => {
                setEvents(prevEvents => [...prevEvents, res.data])
            })
            .catch(err => console.log(err))
    })

    const deleteEvent = ((eventId) => {
        axios.delete(`http://localhost:8000/events/${eventId}`)
            .then(res => {
                setEvents(prevEvents => prevEvents.filter(event => event._id !== eventId))
            })
            .catch(err => console.log(err))
    })

    const editEvent = ((updates, eventId) => {
        axios.put(`http://localhost:8000/events/${eventId}`, updates)
            .then(res => {
                setEvents(prevEvents => prevEvents.map (event => event._id !== eventId ? event : res.data))
            })
            .catch(err => console.log(err))
    })

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <div>
            <h1 className="title">Event Tracker</h1>
        <AddEvents 
            submit={addEvent}
            btnText="Add Event"
        />
        { 
          events.map(event => 
            {
                return <Events
            {...event} 
            key={event._id}
            event={event.event}
            description={event.description}
            completed={event.completed}
            date={event.date}
            itemsNeeded={event.itemsNeeded}
            deleteEvent={deleteEvent}
            editEvent={editEvent}
            /> }) 
        }
        </div>
    )
}

export default App;