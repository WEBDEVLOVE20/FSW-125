const express = require("express");
const trackEvents = express.Router();
const { v4: uuidv4 } = require('uuid');


const events = [
    {
        event: "Birthday Party",
        description: "Jamie's 12th birthday party.",
        completed: true,
        date: 06122020,
        itemsNeeded: ["pizza", "cake", "cups", "streamers", "present"],
        _id: uuidv4()
    },
    {
        event: "Forth of July Party",
        description: "Brenda's Party on the 4th.",
        completed: true,
        date: 07042020,
        itemsNeeded: ["drinks", "cups", "fireworks"],
        _id: uuidv4()
    },
    {
        event: "Baby Shower",
        description: "Jill's baby shower for baby William.",
        completed: false,
        date: 08092020,
        itemsNeeded: ["cupcakes", "present", "card"],
        _id: uuidv4()
    },
    {
        event: "Car Inspection",
        description: "Take car to chevy to have inspected.",
        completed: false,
        date: 09132020,
        itemsNeeded: ["registration", "insurance"],
        _id: uuidv4()
    }
];

//Get & Post
trackEvents.route("/")
    .get((req, res) => {
    res.send(events)
    })
    .post((req, res) => {
    const newEvent = req.body
    newEvent._id = uuidv4()
    events.push(newEvent)
    res.send(newEvent)
});

//Get One
trackEvents.get("/:eventId", (req, res, next) => {
    const eventId = req.params.eventId
    const foundEvent = events.find(event => event._id === eventId)
    if(!foundEvent){
        const error = new Error(`The item with id ${eventId} was not found.`)
        return next(error)
    }
    res.send(foundEvent)
})

//Delete
trackEvents.delete("/:eventId", (req, res) => {
    const eventId = req.params.eventId
    const event = req.body
    event._id = uuidv4()
    const eventIndex = events.findIndex(event => event._id === eventId)
    events.splice(eventIndex, 1)
    res.send("Event was deleted!")
})

//Update - Put
trackEvents.put("/:eventId", (req, res) => {
    const eventId = req.params.eventId
    const event = req.body
    event._id = uuidv4()
    const eventIndex = events.findIndex(event => event._id === eventId)
    const updatedEvent = Object.assign(events[eventIndex], req.body) 
    res.send(updatedEvent)
})

module.exports = trackEvents;