const mongoose = require('mongoose');
const { normalize } = require('path');

const countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    inLockDown: {
        type: String,
        default: 'no',
        lowercase: true
    },
    restrictions: {
        type: [String]
    },
    endDate: {
        type: Date
    },
    countryURL: {
        type: String
    }
});

const Country = mongoose.model('Country', countrySchema);

module.exports= Country;