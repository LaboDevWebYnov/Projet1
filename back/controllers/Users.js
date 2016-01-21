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

// Path: GET api/users/{userId}/getUserById
module.exports.getUserById = function getUserById(req, res, next) {
    logger.debug('BaseUrl:' + req.originalUrl);
    logger.debug('Path:' + req.path);

    logger.info('Getting the user with id:' + Util.getPathParams(req)[2]);
    // Code necessary to consume the User API and respond

    User.findById(
        Util.getPathParams(req)[2],
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

// Path: GET api/users/{username}/getUserByUsername
module.exports.getUserByUsername = function getUserByUsername(req, res, next) {
    logger.debug('BaseUrl:' + req.originalUrl);
    logger.debug('Path:' + req.path);

    logger.info('Getting the user with username:' + Util.getPathParams(req)[4]);
    // Code necessary to consume the User API and respond

    User.findOne(
        {username: Util.getPathParams(req)[2]},
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
// Path: PUT api/users/{userId}/updateUser
module.exports.updateUser = function updateUser(req, res, next) {

    User.findOneAndUpdate(
        {_id: Util.getPathParams(req)[2]},
        {
            $set: {
                //TODO Check that it won't set not updated attributes to 'null'
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                username:req.body.username,
                birthDate: req.body.birthDate,
                phoneNumber: req.body.phoneNumber,
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

// Path : PUT /users/{userId}/updatePassword
module.exports.updatePassword = function updatePassword(req, res, next) {
    logger.info('Updating password for user with id:\n ' + Util.getPathParams(req)[2]);

    var userOldPassword = req.body.oldPassword;
    var newPassword = req.body.newPassword;
    logger.debug('userPassword object:' + userOldPassword);
    logger.debug('newPassword object:' + newPassword);

    User.findById(
        Util.getPathParams(req)[2],
        function (err, user) {
            if (err)
                next(err.message);

            Util.saltPassword(userOldPassword, next, function(err, saltedOldPassword) {
                logger.debug('Salted OldPassword:' + saltedOldPassword);
                Util.saltPassword(newPassword, next, function(err, saltedNewPassword) {
                    logger.debug('Salted NewPassword:' + saltedNewPassword);

                        Util.compareSaltedPasswords(saltedOldPassword, user.password, function (err, isMatch) {
                                    if (err) return next(err.message);
                                    if (!isMatch) {
                                        logger.error('aborting because old passwords doesn\'t match...');
                                        res.status(404).end(JSON.stringify({error: 'Bad oldPassword'}));
                                        //return next(JSON.stringify({error: 'Bad password'}));
                                    }
                                    /*User.findOneAndUpdate(
                                        {_id: Util.getPathParams(req)[2]},
                                        {
                                            $set: {
                                                //TODO Check that the users knows his old password (add a param: oldPw to check before before updating)
                                                password: newPassword
                                            }
                                        },
                                        {new: true}, //means we want the DB to return the updated document instead of the old one
                                        function (err, updatedUser) {
                                            if (err)
                                                return next(err.message);

                                            logger.debug("Updated game object: \n" + updatedUser);
                                            res.set('Content-Type', 'application/json');
                                            res.status(200).end(JSON.stringify(updatedUser || {}, null, 2));
                                        });*/
                        });
                });
            });
        });
};

// Path: PUT api/users/{userId}/updateEmail
module.exports.updateEmail = function updateEmail(req, res, next) {

    User.findOneAndUpdate(
        {_id: Util.getPathParams(req)[2]},
        {
            $set: {
                //TODO Check that it won't set not updated attributes to 'null'
                email: req.body.newEmail,
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


// Path : PUT /users/{userId}/deleteUser
module.exports.deleteUser = function deleteUser(req, res, next) {
    logger.info('Deactivating for user with id:\n '+Util.getPathParams(req)[2]);
    User.findOneAndUpdate(
        {_id: Util.getPathParams(req)[2]},
        {
            $set: {
                active: false
            }
        },
        {new: true}, //means we want the DB to return the updated document instead of the old one
        function (err, updatedUser) {
            if (err)
                return next(err.message);

            logger.debug("Deactivated game object: \n" + updatedUser);
            res.set('Content-Type', 'application/json');
            res.status(200).end(JSON.stringify(updatedUser || {}, null, 2));

        });
};
