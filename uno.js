const express = require('express');
const app = express(),
    bodyParser = require("body-parser"),
    fs = require('fs'),
    port = 3080;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./mini.json');

// place holder for the data
let tasks = [
    {
        id: 1,
        task: 'task1',
        assignee: 'assignee1000',
        status: 'completed'
    },
    {
        id: 2,
        task: 'task2',
        assignee: 'assignee1001',
        status: 'completed'
    },
    {
        id: 3,
        task: 'task3',
        assignee: 'assignee1002',
        status: 'completed'
    },
    {
        id: 4,
        task: 'task4',
        assignee: 'assignee1000',
        status: 'completed'
    },

];

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/api/todos', (req, res) => {
    console.log('api/todos called!!!!!')
    res.json(tasks);
});

app.listen(port, () => {
    console.log(`Server listening on the port::::::${port}`);
});