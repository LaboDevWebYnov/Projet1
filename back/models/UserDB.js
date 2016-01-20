/**
 * Created by Leon on 09/12/2015.
 */
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var User = new Schema({
    firstname: { type: String, required: true},
    lastname: { type: String, required: true},
    username: { type: String, required: true },
    birthDate: { type: Date, required: true},
    email: { type: String, required: true },
    password: { type: String, required: true},
    address: { type: Schema.ObjectId, ref: 'Address', required: false },
    phoneNumber: { type: String, required: true},
    admin: { type: Boolean, required: true },
    active: { type: Boolean, required: true, default: true },
    friends: { type: [{ type: Schema.ObjectId, ref: 'User'}], required: false },
    interests: {type: [{ type: Schema.ObjectId, ref: 'Game'}], required: false },
    created_at: { type: Date, required: true, default: new Date() },
    updated_at: { type: Date, required: true, default: new Date() }
});

User.pre('save', function (next) {
    var user = this;
    var now = new Date();

    //mis � jour �l�ment de controle(Created_at, Updated_at)
    this.updated_at = now;
    if ( !this.created_at ) {
        this.created_at = now;
    }

    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

User.pre('update', function(next){
    this.update({},{ $set: { updated_at: new Date() } });
    next();
});

User.pre('findOneAndUpdate', function(next){
    this.update({},{ $set: { updated_at: new Date() } });
    next();
});

exports.User = mongoose.model('User', User);

