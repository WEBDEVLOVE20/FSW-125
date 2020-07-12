const express = require("express");
const thingFinder = express.Router();
const { v4: uuidv4 } = require('uuid');


const inventoryItems = [
    {
        name: "bananas",
        type: "food",
        price: 200,
        _id: uuidv4()
    },
    {
        name: "pants",
        type: "clothing",    
        price: 1500,
        _id: uuidv4()
    },
    {
        name: "basketball",
        type: "toy",
        price: 1000,
        _id: uuidv4()
    },
    {
        name: "puzzle",
        type: "toy",
        price: 500,
        _id: uuidv4()
    },
    {
        name: "coat",
        type: "clothing",
        price: 2000,
        _id: uuidv4()
    },
    {
        name: "cake",
        type: "food",
        price: 2500,
        _id: uuidv4()
    },
    {
        name: "soup",
        type: "food",
        price: 900,        
        _id: uuidv4()
    }
];

// GET ALL
thingFinder.get("/", (req, res) => {
    res.send(inventoryItems)
});


// GET BY TYPE
thingFinder.get("/search/type", (req, res, next) => {
    const type = req.query.type
    if(!type){
        const error = new Error("You must provide a valid type.")
        return next(error)
    }
    const filteredInventory = inventoryItems.filter(items => items.type === type)
    res.status(200).send(filteredInventory)
});


module.exports = thingFinder