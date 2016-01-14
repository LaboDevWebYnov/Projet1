/**
 * Created by Ezehollar on 14/01/2016.
 */

var logger = require('log4js').getLogger('Users'),
    mongoose = require('mongoose'),
    sanitizer = require('sanitizer'),
    _ = require('lodash'),
    Util = require('./util.js'),
    PlayerDB = require('../models/PlayerDB'),
    Player = mongoose.model('Player'),
    AddressDB = require('../models/AddressDB'),
    Address = mongoose.model('Address');

//Path: GET api/players
module.exports.getPlayers = function getPlayers(req, res, next) {
    logger.info('Getting all players from db...');
    // Code necessary to consume the User API and respond
    Player.find({}, function (err, players) {
        if (err) {
            return next(err.message);
        }
        if (_.isNull(players) || _.isEmpty(players)) {
            res.set('Content-Type', 'application/json');
            res.status(404).json(JSON.stringify(players || {}, null, 2));
        }
        else {
            res.set('Content-Type', 'application/json');
            res.end(JSON.stringify(players || {}, null, 2));
        }
    });
};