import React, { useState } from 'react'
import './bounties.css'
import AddBountyForm from './AddBountyForm.js'

function Bounties(props){
    const { firstName, lastName, living, bountyAmount, type, _id } = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className="list-container">
        { !editToggle ?
        <> 
            <h1>Name: { firstName } { lastName}</h1>
            <h3>Status: {living ? "Alive" : "Deceased"}</h3>
            <h3>Bounty Price: ${ bountyAmount }</h3>
            <h3>Jedi or Sith: { type }</h3>
            <button
                className="delete-btn"
                onClick={() => props.deleteBounty(_id)}>
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
            <AddBountyForm
                firstName={firstName}
                lastName={lastName}
                living={living ? "Alive" : "Deceased"}
                bountyAmount={bountyAmount}
                type={type}
                _id={_id}
                btnText="Submit Edit" 
                submit={props.editBounty}
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

export default Bounties;