const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const ListItem = mongoose.model('ListItem', listSchema);

module.exports = ListItem;