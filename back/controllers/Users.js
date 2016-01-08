/**
 * Created by Antoine on 15/12/2015.
 */
'use strict';

var logger = require('log4js').getLogger('Users'),
    mongoose = require('mongoose'),
    userDB = require('../models/UserDB'),
    User = mongoose.model('User');

module.exports.getUsers = function getUsers (req, res, next) {
    logger.info('Getting all users from db...');
    // Code necessary to consume the Weather API and respond
    User.find({
    }, function(err, result) {
        if (err) {
            return next(err.message);
        }

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result || {}, null, 2));
    });
};

module.exports.addUser = function addUser (req, res, next) {
    logger.info('Adding new user...');
    // Code necessary to consume the Weather API and respond

    res.json({"message":"not implemented yet"});

    //@TODO implement the function
};

module.exports.getUserById = function getUserById (req, res, next) {
    logger.info('BaseUrl:'+req.originalUrl);
    logger.info('Path:'+req.path);
    logger.info('Getting the user with id:'+ req.params[0]);
    // Code necessary to consume the Weather API and respond

    res.json({"message":"not implemented yet"});

    //@TODO implement the function
};