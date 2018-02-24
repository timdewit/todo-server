const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');

const todos = [
    {
        name: 'Develop backend DB',
        description: 'Implement DB to backend',
        status: 'waiting'
    },
    {
        name: 'Give Beatrice some love',
        description: 'Give her a kiss and a hug',
        status: 'in progress'
    },
    {
        name: 'Eat cake',
        description: 'Eat some delicious cake made by Carina',
        status: 'finished'
    }
];

app.use(bodyParser.json());

app.get('/todos', (req, res) => {
    res.send(todos);
});

app.get('/todo/:index', (req, res) => {
    let index = parseInt(req.params.index);
    
    if(index >= 0 && index < todos.length)
        res.send(todos[index]);
    else
        res.send({error: 'Index is invalid'});
});

/*app.post('/todo/:index/edit', (req, res) => {
    let index = parseInt(req.params.index);
    
    if(index >= 0 && index < todos.length) {
        let 
    }
    else
        res.send({error: 'Index is invalid'});
}); */

http.listen(3000, () => {
    console.log("Server started. Listening on port 3000");
});