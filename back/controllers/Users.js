/**
 * Created by Antoine on 15/12/2015.
 */
'use strict';

var logger = require('log4js').getLogger('Users'),
    mongoose = require('mongoose'),
    sanitizer = require('sanitizer'),
    Url = require('url'),
    Util = require('./util.js'),
    UserDB = require('../models/UserDB'),
    User = mongoose.model('User'),
    AddressDB = require('../models/AddressDB'),
    Address = mongoose.model('Address');

//Path : /users
module.exports.getUsers = function getUsers (req, res, next) {
    logger.info('Getting all users from db...');
    // Code necessary to consume the Weather API and respond
    User.find({
    }, function(err, result) {
        if (err) {
            return next(err.message);
        }

        res.setHeader('Content-Type', 'application/json');
        res.status(200).end(JSON.stringify(result || {}, null, 2));
    });
};

//Path : /users/addUser
module.exports.addUser = function addUser (req, res, next) {
    logger.info('Adding new user...');
    // Code necessary to consume the Weather API and respond
    var user = new User({
        firstname: sanitizer.escape(req.body.username),
        lastname: sanitizer.escape(req.body.lastname),
        username: sanitizer.escape(req.body.username),
        birthDate: sanitizer.escape(req.body.birthDate),
        email: sanitizer.escape(req.body.email),
        password: sanitizer.escape(req.body.password),
        address: null,
        phoneNumber: sanitizer.escape(req.body.phoneNumber),
        admin: false,
        friends: []
    });

    user.save(function(err, user){
        if(err){
            res.json({
                success: false,
                status: err.status || 500,
                err: err
            });
        }else {
            res.json({
                user: user,
                success: true,
                status: 200

            });
        }
    });
};

// Path : /users/getUserById/{userId}
module.exports.getUserById = function getUserById (req, res, next) {
    logger.info('BaseUrl:'+req.originalUrl);
    logger.info('Path:'+req.path);

    logger.info('Getting the user with id:'+ Util.getPathParams(req)[3]);
    // Code necessary to consume the Weather API and respond

    User.findById(
        Util.getPathParams(req)[3],
        function (err, user) {
            if(err)
            {
                logger.info(err.message);
                res.json({
                    succes: true,
                    status: err.status || 500,
                    err: err
                });
            }
            logger.info(user);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(user || {}, null, 2));
        }
    );
};

// Path : /users/getUserByUsername/{username}
module.exports.getUserByUsername = function getUserByUsername (req, res, next) {
    logger.info('BaseUrl:'+req.originalUrl);
    logger.info('Path:'+req.path);

    logger.info('Getting the user with id:'+ Util.getPathParams(req)[3]);
    // Code necessary to consume the Weather API and respond

    User.findOne(
        { username: Util.getPathParams(req)[3] },
        function (err, user) {
            if(err)
            {
                logger.info(err.message);
                res.json({
                    succes: true,
                    status: err.status || 500,
                    err: err
                });
            }
            logger.info(user);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(user || {}, null, 2));
        }
    )
// Path : /users/{username}
module.exports.updateUser = function updateUser (req, res, next) {

    };
};