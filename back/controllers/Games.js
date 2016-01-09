/**
 * Created by Antoine on 08/01/2016.
 */
'use strict';

var logger = require('log4js').getLogger('controller.Games'),
    mongoose = require('mongoose'),
    gameDB = require('../models/GameDB'),
    sanitizer = require('sanitizer'),
    Game = mongoose.model('Game');

//Path : /games
module.exports.getGames = function getGames(req, res, next) {
    logger.info('Getting all games from db...');
    // Code necessary to consume the Game API and respond
    Game.find({}, function (err, result) {
        if (err) {
            return next(err.message);
        }

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result || {}, null, 2));
    });
};

//Path : /games/addGame
module.exports.addGame = function addGame(req, res, next) {
    logger.info('Adding new user...');
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

// Path : /games/getGameById/{gameId}
module.exports.getGameById = function getGameById(req, res, next) {
    logger.info('Getting all games from db...');
    // Code necessary to consume the Game API and respond
    Game.find({}, function (err, result) {
        if (err) {
            return next(err.message);
        }

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result || {}, null, 2));
    });
};


// Path : /games/getGameByName/{gameId}
module.exports.getGameByName = function getGameByName(req, res, next) {
    logger.info('BaseUrl:' + req.originalUrl);
    logger.info('Path:' + req.path);
    logger.info('Getting the user with id:' + req.params[0]);
    // Code necessary to consume the Weather API and respond

    res.json({"message": "not implemented yet"});

    //@TODO implement the function
};