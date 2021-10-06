const express = require('express');
const partnerRouter = express.Router();

registerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req, res) => {
    res.end('Will register you');
})
.post((req, res) => {
    res.end(`Will add the user: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /register');
})
.delete((req, res) => {
    res.end('Deleting this user');
});

registerRouter.route('/:registerId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req, res) => {
    res.end(`Will send details of user: ${req.params.registerId} to you `);
})
.post((req, res) => {
    res.end(`Will add the user: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /register');
})
.delete((req, res) => {
    res.end('Deleting all users');
}); //workshop pre

module.exports = registerRouter;