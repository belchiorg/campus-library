const mongoose = require('mongoose');

const Subject = mongoose.model('Subject', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLenght: 2,
        maxLenght: 255
    }
}));

exports.Subject = Subject;