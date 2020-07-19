import React, { useState } from 'react'
import './add-events.css'

function AddEvents(props){

    const initInputs = { event: props.event || "", description: props.description || "", completed: props.completed || "", date: props.date || "", itemsNeeded: props.itemsNeeded || ""  }
    
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = ((e) => {
        const {name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    })
    
    const handleSubmit = ((e) => {
        e.preventDefault() 
        if (inputs.completed.toLowerCase() === "yes" ) {
            inputs.completed = true
        } else {
            inputs.completed = false
        }
        props.submit(inputs, props._id)
        setInputs(initInputs)
    })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="event"
                    value={inputs.event}
                    onChange={handleChange}
                    placeholder="Enter Event"
                />
                <input
                    type="text"
                    name="description"
                    value={inputs.description}
                    onChange={handleChange}
                    placeholder="Provide Description"
                />
                <input
                    type="text"
                    name="completed"
                    value={inputs.completed}
                    onChange={handleChange}
                    placeholder="Completed? yes or no"
                />
                <input
                    type="number"
                    name="date"
                    value={inputs.date}
                    onChange={handleChange}
                    placeholder="Enter Date MMDDYYYY"
                />
                <input
                    type="text"
                    name="itemsNeeded"
                    value={inputs.itemsNeeded}
                    onChange={handleChange}
                    placeholder="Ex. present, cake, card"
                />
                <button className="add-btn">{ props.btnText }</button>
            </form>
        </div>
    )
}

export default AddEvents;