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

// Path: GET api/players/{playerId}/getPlayerById
module.exports.getPlayerById = function getPlayerById(req, res, next) {
    logger.debug('BaseUrl:' + req.originalUrl);
    logger.debug('Path:' + req.path);

    logger.info('Getting the player with id:' + Util.getPathParams(req)[1]);
    // Code necessary to consume the User API and respond

    Player.findById(
        Util.getPathParams(req)[1],
        function (err, player) {
            if (err)
                return next(err.message);

            logger.debug(player);
            if (_.isNull(player) || _.isEmpty(player)) {
                res.set('Content-Type', 'application/json');
                res.status(404).json(JSON.stringify(player || {}, null, 2));
            }
            else {
                res.set('Content-Type', 'application/json');
                res.status(200).end(JSON.stringify(player || {}, null, 2));
            }
        }
    );
};

// Path: GET api/players/{playerId}/getPlayerByUserId
module.exports.getPlayerByUserId = function getPlayerByUserId(req, res, next) {
    logger.debug('BaseUrl:' + req.originalUrl);
    logger.debug('Path:' + req.path);

    logger.info('Getting the player with id:' + Util.getPathParams(req)[1]);
    // Code necessary to consume the User API and respond

    Player.find(
        { _id: Util.getPathParams(req)[1] },
        function (err, players) {
            if (err)
                return next(err.message);

            logger.debug(players);
            if (_.isNull(players) || _.isEmpty(players)) {
                res.set('Content-Type', 'application/json');
                res.status(404).json(JSON.stringify(players || {}, null, 2));
            }
            else {
                res.set('Content-Type', 'application/json');
                res.status(200).end(JSON.stringify(players || {}, null, 2));
            }
        }
    );
};

// Path : PUT /players/{playerId}/deletePlayer
module.exports.deletePlayer = function deletePlayer(req, res, next) {
    logger.info('Deactivating for player with id:\n '+Util.getPathParams(req)[2]);
    Player.findOneAndUpdate(
        {_id: Util.getPathParams(req)[2]},
        {
            $set: {
                active: false
            }
        },
        {new: true}, //means we want the DB to return the updated document instead of the old one
        function (err, updatedPlayer) {
            if (err)
                return next(err.message);

            logger.debug("Deactivated player object: \n" + updatedPlayer);
            res.set('Content-Type', 'application/json');
            res.status(200).end(JSON.stringify(updatedPlayer || {}, null, 2));

        });
};