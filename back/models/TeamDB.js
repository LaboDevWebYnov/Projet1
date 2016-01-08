/**
 * Created by Leon on 09/12/2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Team = new Schema({
    name: { type: String, required: true },
    tag: { type: String, required: true },
    captain: { type: Schema.ObjectId, ref: 'Player', required: true },
    players: { type: [{ type: Schema.ObjectId, ref: 'Player'}], required: true },
    invitedPlayers: { type: [{ type: Schema.ObjectId, ref: 'Player'}], required: false },
    postulatedPlayers: { type: [{ type: Schema.ObjectId, ref: 'Player'}], required: false },
    active: { type: Boolean, required: true },
    game: { type: Schema.ObjectId, ref: 'Game', required: true },
    created_at: { type: Date, required: true, default: new Date() },
    updated_at: { type: Date, required: true, default: new Date() }
});

Team.pre('save', function(next){
    var now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
        this.created_at = now;
    }
    next();
});

exports.Team = mongoose.model('Team', Team);