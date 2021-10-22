const express = require('express');
const Listing = require('../models/listings');
const authenticate = require('../authenticate');
const cors = require('./cors');

const listingRouter = express.Router();


listingRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
    Listing.find()
    .populate("listings.userName")
    .then(listings => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(listings);
    })
    .catch(err => next(err));
    
})
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Listing.create(req.body)
    .then(listing => {
        console.log('Listing Created', listing);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader.json(listing);
    })
    .catch(err => next(err));
})
.put(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /listings');
})
.delete(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
    Listing.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

listingRouter.route('/:listingId')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
    Listing.findById(req.params.listingId)
    .populate("listings.userName")
    .then((listing) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(listing);
    })
    .catch(err => next(err));
})
.post(authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /listings/${req.params.listingId}`);
})
.put(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Listing.findByIdAndUpdate(req.params.listingId, {
        $set: req.body
    }, { new: true })
    .then(listing => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(listing);
    })
    .catch(err => next(err));
})
.delete(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Listing.findByIdAndDelete(req.params.listingId)
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

module.exports = listingRouter;