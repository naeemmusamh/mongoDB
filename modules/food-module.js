'use strict';

const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, enum: ['meat', 'vega'] }
});

const foodModel = mongoose.model('food', foodSchema);

module.exports = foodModel;