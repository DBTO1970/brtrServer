const express = require('express');
const loginRouter = express.Router();

loginRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req, res) => {
    res.end('Will send all the users to you');
})
.post((req, res) => {
    res.end(`Will add the user: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /login');
})
.delete((req, res) => {
    res.end('Deleting all users');
});

userRouter.route('/:userId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req, res) => {
    res.end(`Will send details of user: ${req.params.userId} to you `);
})
.post((req, res) => {
    res.end(`Will add the user: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /login');
})
.delete((req, res) => {
    res.end('Deleting all users');
}); //workshop pre

module.exports = loginRouter;