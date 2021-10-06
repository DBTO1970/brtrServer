const express = require('express');
const listingRouter = express.Router();

listingRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req, res) => {
    res.end('Will send all the listings to you');
})
.post((req, res) => {
    res.end(`Will add the listing: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /listings');
})
.delete((req, res) => {
    res.end('Deleting all listings');
});

listingRouter.route('/:listingId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req, res) => {
    res.end(`Will send details of listing: ${req.params.listingId} to you `);
})
.post((req, res) => {
    res.end(`Will add the listing: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /listings');
})
.delete((req, res) => {
    res.end('Deleting all listings');
}); //workshop pre

module.exports = listingRouter;