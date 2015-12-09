/**
 * Created by Leon on 09/12/2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    firstname: { type: String, required: true},
    lastname: { type: String, required: true},
    username: { type: String, required: true },
    birthDate: { type: Date, required: true},
    email: { type: String, required: true },
    password: { type: String, required: true},
    avatar: { type: String, required: true},
    address: { type: Schema.ObjectId, ref: 'Address', required: true },
    phoneNumber: { type: String, required: true},
    admin: { type: Boolean, required: true },
    friends: { type: [{ type: Schema.ObjectId, ref: 'User'}], required: true },
    created_at: { type: Date, required: true, default: new Date() },
    updated_at: { type: Date, required: true, default: new Date() }
});

exports.User = mongoose.model('User', User);