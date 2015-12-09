/**
 * Created by Leon on 09/12/2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Game = new Schema({
    name: { type: String, required: true },
    releaseDate: { type: Date, required: true},
    multiPlayer: { type: Boolean, required: true },
    description: { type: String, required: true },
    editor: { type: String, required: true },
    created_at: { type: Date, required: true, default: new Date() },
    updated_at: { type: Date, required: true, default: new Date() }
});

exports.Game = mongoose.model('Game', Game);