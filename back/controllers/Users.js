/**
 * Created by Antoine on 15/12/2015.
 */
'use strict';

var logger = require('log4js').getLogger('Users'),
    mongoose = require('mongoose'),
    sanitizer = require('sanitizer'),
    _ = require('lodash'),
    Util = require('./util.js'),
    UserDB = require('../models/UserDB'),
    User = mongoose.model('User'),
    AddressDB = require('../models/AddressDB'),
    Address = mongoose.model('Address');

//Path: GET api/users
module.exports.getUsers = function getUsers(req, res, next) {
    logger.info('Getting all users from db...');
    // Code necessary to consume the User API and respond
    User.find({}, function (err, users) {
        if (err) {
            return next(err.message);
        }
        if (_.isNull(users) || _.isEmpty(users)) {
            res.set('Content-Type', 'application/json');
            res.status(404).json(JSON.stringify(users || {}, null, 2));
        }
        else {
            res.set('Content-Type', 'application/json');
            res.end(JSON.stringify(users || {}, null, 2));
        }
    });
};

//Path: GET api/users/addUser
module.exports.addUser = function addUser(req, res, next) {
    logger.info('Adding new user...');
    // Code necessary to consume the User API and respond
    var user = new User({
        firstname: sanitizer.escape(req.body.firstname),
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

    user.save(function (err, user) {
        if (err)
            return next(err.message);

        if (_.isNull(user) || _.isEmpty(user)) {
            res.set('Content-Type', 'application/json');
            res.status(404).json(JSON.stringify(user || {}, null, 2));
        }
        else {
            res.set('Content-Type', 'application/json');
            res.status(200).end(JSON.stringify(user || {}, null, 2));
        }
    });
};

// Path: GET api/users/getUserById/{userId}
module.exports.getUserById = function getUserById(req, res, next) {
    logger.debug('BaseUrl:' + req.originalUrl);
    logger.debug('Path:' + req.path);

    logger.info('Getting the user with id:' + Util.getPathParams(req)[3]);
    // Code necessary to consume the User API and respond

    User.findById(
        Util.getPathParams(req)[3],
        function (err, user) {
            if (err)
                return next(err.message);

            logger.debug(user);
            if (_.isNull(user) || _.isEmpty(user)) {
                res.set('Content-Type', 'application/json');
                res.status(404).json(JSON.stringify(user || {}, null, 2));
            }
            else {
                res.set('Content-Type', 'application/json');
                res.status(200).end(JSON.stringify(user || {}, null, 2));
            }
        }
    );
};

// Path: GET api/users/getUserByUsername/{username}
module.exports.getUserByUsername = function getUserByUsername(req, res, next) {
    logger.debug('BaseUrl:' + req.originalUrl);
    logger.debug('Path:' + req.path);

    logger.info('Getting the user with username:' + Util.getPathParams(req)[3]);
    // Code necessary to consume the User API and respond

    User.findOne(
        {username: Util.getPathParams(req)[3]},
        function (err, user) {
            if (err)
                return next(err.message);

            logger.debug(user);

            if (_.isNull(user) || _.isEmpty(user)) {
                res.set('Content-Type', 'application/json');
                res.status(404).json(JSON.stringify(user || {}, null, 2));
            }
            else {
                res.set('Content-Type', 'application/json');
                res.status(200).end(JSON.stringify(user || {}, null, 2));
            }
        }
    );
};
// Path: PUT api/users/updateUser/{userId}
module.exports.updateUser = function updateUser(req, res, next) {

    User.findOneAndUpdate(
        {_id: Util.getPathParams(req)[3]},
        {
            $set: {
                //TODO Check that it won't set not updated attributes to 'null'
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                username: req.body.username,
                birthDate: req.body.birthDate,
                email: req.body.email,
                password: req.body.password,
                phoneNumber: req.body.phoneNumber,
                admin:req.body.admin,
                active:req.body.active,
                friends:req.body.friends,
                updated_at: Date.now()
            }
        },
        {new: true}, //means we want the DB to return the updated document instead of the old one
        function (err, updatedUser) {
            if (err)
                return next(err.message);

            logger.debug("Updated game object: \n" + updatedUser);
            res.set('Content-Type', 'application/json');
            res.status(200).end(JSON.stringify(updatedUser || {}, null, 2));

        });
};

// Path : /users/deleteUser/{userId}
module.exports.deleteUser = function deleteUser(req, res, next) {

    User.update(
        {_id: Util.getPathParams(req)[3]},
        {
            $set: {active: false}
        }
    ).exec(function (err) {
            if (err) {
                logger.info(err.message);
                res.json({
                    success: true,
                    status: err.status || 500,
                    err: err
                });
            } else {
                res.json({
                    success: true,
                    status: 200
                });
            }

        });
};
