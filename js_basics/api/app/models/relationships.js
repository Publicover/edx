const mongoose = require('mongoose');

const relationshipsModel = mongoose.model('relationships', {
    // Our model will be composed of three compulsory fields: source, target and weight
    source: {
        type: String,
        require: true
    },
    target: {
        type: String,
        require: true
    },
    weight: {
        type: Number,
        require: true
    }
});

module.exports = relationshipsModel;