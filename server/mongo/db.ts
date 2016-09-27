var mongoose = require('mongoose');
var mockgoose = require('mockgoose');

mockgoose(mongoose);
export const connection = mongoose.connect('mongodb://localhost:27017/material-test');

