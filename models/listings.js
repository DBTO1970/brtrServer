const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    item: {
        type: String,
        required: true,
        uique: false,
    },
    description: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,

    },
    featured: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;