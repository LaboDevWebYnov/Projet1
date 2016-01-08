/**
 * Created by Antoine on 08/01/2016.
 */
'use strict';

var logger = require('log4js').getLogger('controller.Games'),
    mongoose = require('mongoose'),
    gameDB = require('../models/GameDB'),
    Game = mongoose.model('Game');

module.exports.getGames = function getGames (req, res, next) {
    logger.info('Getting all games from db...');
    // Code necessary to consume the Weather API and respond
    Game.find({
    }, function(err, result) {
        if (err) {
            return next(err.message);
        }

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result || {}, null, 2));
    });
};

module.exports.getGameById = function getGameById (req, res, next) {
    logger.info('Getting all games from db...');
    // Code necessary to consume the Weather API and respond
    Game.find({
    }, function(err, result) {
        if (err) {
            return next(err.message);
        }

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result || {}, null, 2));
    });
}

module.exports.addGame = function addGame (req, res, next) {
    logger.info('Adding new user...');
    // Code necessary to consume the Weather API and respond

    res.json({"message":"not implemented yet"});

    //@TODO implement the function
};

module.exports.getGameById = function getGameById (req, res, next) {
    logger.info('BaseUrl:'+req.originalUrl);
    logger.info('Path:'+req.path);
    logger.info('Getting the user with id:'+ req.params[0]);
    // Code necessary to consume the Weather API and respond

    res.json({"message":"not implemented yet"});

    //@TODO implement the function
};