/**
 * Created by Leon on 09/12/2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Address = new Schema({
    postCode: { type: Number, required: true},
    city: { type: String, required: true},
    country: { type: String, required: true},
    line: { type: String, required: true},
    created_at: { type: Date, required: true, default: new Date() },
    updated_at: { type: Date, required: true, default: new Date() }
});

exports.Address = mongoose.model('Address', Address);