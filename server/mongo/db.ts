var mongoose = require('mongoose');

export const connection = mongoose.connect('mongodb://localhost:27017/material-test');

