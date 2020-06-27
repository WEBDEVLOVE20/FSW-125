const express = require("express");
const todoList = express.Router();
const { v4: uuidv4 } = require('uuid');


const todoItems = [
    {
        name: "Laundry",
        description : "Wash, Dry, Iron, Fold",
        imageUrl: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Yard Work",
        description : "Mow, Plant Flowers, Pull Weeds",
        imageUrl: "https://images.unsplash.com/photo-1458245201577-fc8a130b8829?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Grocery Store",
        description : "Apples, Oranges, Eggs, Bread, Milk",
        imageUrl: "https://images.unsplash.com/photo-1557333610-90ee4a951ecf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Dishes",
        description : "Wash, Rinse, Dry, Put Away",
        imageUrl: "https://images.unsplash.com/uploads/1413170239208ebba60a2/07d615e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        completed: true,
        _id: uuidv4()
    },
]


//Get All & Post
todoList.route("/")
    .get((req, res) => {
    res.send(todoItems)
    })
    .post((req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todoItems.push(newTodo)
    res.send(`Successfully added ${newTodo.name} to the database!`)
});

//Get-Only One
todoList.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todo = req.body
    todo._id = uuidv4()
    const foundTodo = todoItems.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

//Delete
todoList.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todo = req.body
    todo._id = uuidv4()
    const todoIndex = todoItems.findIndex(todo => todo._id === todoId)
    todoItems.splice(todoIndex, 1)
    res.send(`Todo List item was deleted!`)
})

//Update - Put
todoList.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todo = req.body
    todo._id = uuidv4()
    const todoIndex = todoItems.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todoItems[todoIndex], req.body) 
    res.send(updatedTodo)
})


module.exports = todoList