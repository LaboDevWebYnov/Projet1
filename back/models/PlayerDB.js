/**
 * Created by Leon on 09/12/2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Player = new Schema({
    user: { type: Schema.ObjectId, ref: 'User', required: true },
    login: { type: String, required: true },
    game: { type: Schema.ObjectId, ref: 'Game', required: true },
    active: { type: Boolean, required: true, default: true },
    created_at: { type: Date, required: true, default: new Date() },
    updated_at: { type: Date, required: true, default: new Date() }
});

Player.pre('save', function(next){
    var now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
        this.created_at = now;
    }
    next();
});

exports.Player = mongoose.model('Player', Player);