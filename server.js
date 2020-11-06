const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
server.use(cors());
server.use(bodyParser.json())

// My  resource
const menu = [
    {id: 1, name: "Margherita", price: 10},
    {id: 2, name: "Hawaiian", price: 14},
    {id: 3, name: "Pepperoni", price: 12}
]

// Root route
server.get('/', (req, res) => res.send('Hello, client!'))

// Cats index route
server.get('/menu', (req, res) => res.send({menu}))

// Create cat route
server.post('/menu', (req, res) => {
    const menuData = req.body;
    const newMenuItem = {id: menu.length + 1, ...menuData}
    menu.push(newMenuItem);
    res.status(201).send(newMenuItem)
})


module.exports = server

/*
cats - menu
catData - menuData
newCat - newMenuItem
*/