/**
 * Created by Ezehollar on 14/01/2016.
 */

var logger = require('log4js').getLogger('controller.playerAccount'),
    mongoose = require('mongoose'),
    sanitizer = require('sanitizer'),
    _ = require('lodash'),
    Util = require('./utils/util.js'),
    PlayerAccountDB = require('../models/PlayerAccountDB'),
    PlayerAccount = mongoose.model('PlayerAccount'),
    AddressDB = require('../models/AddressDB'),
    Address = mongoose.model('Address'),
    GameDB = require('../models/GameDB'),
    Game = mongoose.model('Game');

//Path: GET api/players
module.exports.getPlayerAccountList = function getPlayerAccountList(req, res, next) {
    logger.info('Getting all players from db...');
    // Code necessary to consume the User API and respond
    PlayerAccount.find({}, function (err, playerAccountList) {
        if (err) {
            return next(err.message);
        }
        if (_.isNull(playerAccountList) || _.isEmpty(playerAccountList)) {
            res.set('Content-Type', 'application/json');
            res.status(404).json(JSON.stringify(playerAccountList || {}, null, 2));
        }
        else {
            res.set('Content-Type', 'application/json');
            res.end(JSON.stringify(playerAccountList || {}, null, 2));
        }
    });
};

//Path: GET api/playerAccount/{userId}/addPlayerAccount/{gameId}
module.exports.addPlayerAccount = function addPlayerAccount(req, res, next) {
    logger.info('Adding new playerAccount...');

    Game.findOne(
        {_id: Util.getPathParams(req)[2]},
        function(err, game) {
           if(err)
                return next(err.message);

            User.findOne(
                {_id: Util.getPathParams(req)[2]},
                function(err, user) {
                    if(err)
                        return next(err.message);

                    var playerAccount = new PlayerAccount({
                        user: user,
                        login: req.body.login,
                        game: game,
                        active: true,
                        created_at: new Date(),
                        updated_at: new Date()
                    });

                    playerAccount.save(function (err, savedPlayerAccount) {
                        if (err)
                            return next(err.message);

                        if (_.isNull(savedPlayerAccount) || _.isEmpty(savedPlayerAccount)) {
                            res.set('Content-Type', 'application/json');
                            res.status(404).json(JSON.stringify(savedPlayerAccount || {}, null, 2));
                        }
                        else {
                            res.set('Content-Type', 'application/json');
                            res.status(200).end(JSON.stringify(savedPlayerAccount || {}, null, 2));
                        }
                    });
            });
    });


};

// Path: GET api/players/{playerAcountId}/getPlayerAccountById
module.exports.getPlayerAccountById = function getPlayerAccountById(req, res, next) {
    logger.debug('BaseUrl:' + req.originalUrl);
    logger.debug('Path:' + req.path);

    logger.info('Getting the player with id:' + Util.getPathParams(req)[1]);
    // Code necessary to consume the User API and respond

    PlayerAccount.findById(
        Util.getPathParams(req)[1],
        function (err, playerAccount) {
            if (err)
                return next(err.message);

            logger.debug(playerAccount);
            if (_.isNull(playerAccount) || _.isEmpty(playerAccount)) {
                res.set('Content-Type', 'application/json');
                res.status(404).json(JSON.stringify(playerAccount || {}, null, 2));
            }
            else {
                res.set('Content-Type', 'application/json');
                res.status(200).end(JSON.stringify(playerAccount || {}, null, 2));
            }
        }
    );
};

// Path: GET api/players/{playerAcountId}/getPlayerByUserId
module.exports.getPlayerByUserId = function getPlayerByUserId(req, res, next) {
    logger.debug('BaseUrl:' + req.originalUrl);
    logger.debug('Path:' + req.path);

    logger.info('Getting the player with id:' + Util.getPathParams(req)[1]);
    // Code necessary to consume the User API and respond

    PlayerAccount.find(
        { _id: Util.getPathParams(req)[1] },
        function (err, playerAccountList) {
            if (err)
                return next(err.message);

            logger.debug(playerAccountList);
            if (_.isNull(playerAccountList) || _.isEmpty(playerAccountList)) {
                res.set('Content-Type', 'application/json');
                res.status(404).json(JSON.stringify(playerAccountList || {}, null, 2));
            }
            else {
                res.set('Content-Type', 'application/json');
                res.status(200).end(JSON.stringify(playerAccountList || {}, null, 2));
            }
        }
    );
};

// Path : PUT /players/{playerId}/deletePlayer
module.exports.deletePlayer = function deletePlayer(req, res, next) {
    logger.info('Deactivating for player with id:\n '+Util.getPathParams(req)[2]);
    PlayerAccount.findOneAndUpdate(
        {_id: Util.getPathParams(req)[2]},
        {
            $set: {
                active: false
            }
        },
        {new: true}, //means we want the DB to return the updated document instead of the old one
        function (err, updatedPlayerAccount) {
            if (err)
                return next(err.message);

            logger.debug("Deactivated player object: \n" + updatedPlayerAccount);
            res.set('Content-Type', 'application/json');
            res.status(200).end(JSON.stringify(updatedPlayerAccount || {}, null, 2));

        });
};