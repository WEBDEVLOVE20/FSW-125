const express = require('express')
const app = express()

const movies = [
    {
        name: "Pirates of the Caribbean: Dead Man's Chest",
        year: 2006
    },
    {
        name: "Harry Potter and the Sorcerer's Stone",
        year: 2001
    },
    {
        name: "Rocky II",
        year: 1979
    },
    {   
        name: "Back to the Future",
        year: 1985
    },
    {   
        name: "Men in Black",
        year: 1997
    }
]

const actors = [
    {
        name: "Johnny Deep",
        age: 57
    },
    {
        name: "Daniel Radcliffe",
        age: 30
    },
    {
        name: "Sylvester Stallone",
        age: 73
    },
    {   
        name: "Michael J. Fox",
        age: 59
    },
    {   
        name: "Will Smith",
        age: 51
    }
]

const actresses = [
    {
        name: "Keira Knightley",
        age: 35
    },
    {
        name: "Emma Watson",
        age: 30
    },
    {
        name: "Talia Shire",
        age: 74
    },
    {   
        name: "Lea Thompson",
        age: 59
    },
    {   
        name: "Linda Fiorentino",
        age: 60
    }
]

app.get("/movies", (req, res) => {
    res.send(movies)
})

app.get("/actors", (req, res) => {
    res.send(actors)
})

app.get("/actresses", (req, res) => {
    res.send(actresses)
})


app.listen(4000, () => {
    console.log("The servcer is running on Port 4000")
})