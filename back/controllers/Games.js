/**
 * Created by Antoine on 08/01/2016.
 */
'use strict';

var logger = require('log4js').getLogger('controller.Games'),
    mongoose = require('mongoose'),
    gameDB = require('../models/GameDB'),
    sanitizer = require('sanitizer'),
    Util = require('./util.js'),
    Game = mongoose.model('Game');

//Path: GET api/games
module.exports.getGames = function getGames(req, res, next) {
    logger.info('Getting all games from db...');
    // Code necessary to consume the Game API and respond
    Game.find({}, function (err, result) {
        if (err) {
            return next(err.message);
        }

        //TODO Add null object catching to response 404 to the front side (in case of no game in DB ?!)
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result || {}, null, 2));
    });
};

//Path: GET api/games/addGame
module.exports.addGame = function addGame(req, res, next) {
    logger.info('Adding new game...');
    // Code necessary to consume the Game API and respond
    var game = new Game({
        name: sanitizer.escape(req.body.name),
        releaseDate: sanitizer.escape(req.body.releaseDate),
        multiPlayer: sanitizer.escape(req.body.multiPlayer),
        description: sanitizer.escape(req.body.description),
        editor: sanitizer.escape(req.body.editor),
        created_at: sanitizer.escape(req.body.created_at),
        updated_at: sanitizer.escape(req.body.updated_at)

    });

    game.save(function (err, game) {
        if (err)
            return next(err.message);

        res.json({
            game: game,
            success: true,
            status: 200

        });

    });
};

// Path: GET api/games/getGameById/{gameId}
module.exports.getGameById = function getGameById(req, res, next) {
    logger.debug('BaseUrl:' + req.originalUrl);
    logger.debug('Path:' + req.path);

    logger.info('Getting the game with id:' + Util.getPathParams(req)[3]);
    // Code necessary to consume the Game API and respond

    Game.findById(
        Util.getPathParams(req)[3],
        function (err, game) {
            if (err)
                return next(err.message);

            logger.debug(game);

            //TODO Add null object catching to response 404 to the front side (in case of user bad input)
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(game || {}, null, 2));
        }
    );
};


// Path: GET api/games/getGameByName/{gameName}
module.exports.getGameByName = function getGameByName(req, res, next) {
    logger.debug('BaseUrl:' + req.originalUrl);
    logger.debug('Path:' + req.path);

    logger.info('Getting the game with name:' + Util.getPathParams(req)[3]);
    // Code necessary to consume the Game API and respond

    Game.findOne(
        {name: Util.getPathParams(req)[3]},
        function (err, game) {
            if (err)
                return next(err.message);

            logger.debug(game);

            //TODO Add null object catching to response 404 to the front side (in case of user bad input)
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(game || {}, null, 2));
        }
    );
};