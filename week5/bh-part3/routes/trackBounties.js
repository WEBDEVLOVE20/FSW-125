const express = require("express");
const trackBounties = express.Router();
const { v4: uuidv4 } = require('uuid');


const bounties = [
    {
        firstName: "Jane",
        lastName: "Levvit",
        living: true,
        bountyAmount: 500,
        type: "Jedi",
        _id: uuidv4()
    },
    {
        firstName: "Bob",
        lastName: "Pluto",
        living: false,
        bountyAmount: 450,
        type: "Sith",
        _id: uuidv4()
    },
    {
        firstName: "Jim",
        lastName: "Jones",
        living: false,
        bountyAmount: 300,
        type: "Jedi",
        _id: uuidv4()
    },
    {
        firstName: "George",
        lastName: "Smith",
        living: true,
        bountyAmount: 120,
        type: "Sith",
        _id: uuidv4()
    }
];

//Get & Post
trackBounties.route("/")
    .get((req, res) => {
    res.send(bounties)
    })
    .post((req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`)
});

//Delete
trackBounties.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bounty = req.body
    bounty._id = uuidv4()
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Bounty was deleted!")
})

//Update - Put
trackBounties.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bounty = req.body
    bounty._id = uuidv4()
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body) 
    res.send(updatedBounty)
})

module.exports = trackBounties