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

<<<<<<< HEAD
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
=======
    user.save(function (err, user) {
        if (err)
            return next(err.message);
>>>>>>> 937d13736a756a62ac3e9e00d93a0bd7d1864908

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
<<<<<<< HEAD
            if(err)
            {
                logger.info(err.message);
                res.json({
                    succes: true,
                    status: err.status || 500,
                    err: err
                });
=======
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
>>>>>>> 937d13736a756a62ac3e9e00d93a0bd7d1864908
            }
        }
    );
};

<<<<<<< HEAD
// Path : /users/getUserByUsername/{username}
module.exports.getUserByUsername = function getUserByUsername (req, res, next) {
    logger.info('BaseUrl:'+req.originalUrl);
    logger.info('Path:'+req.path);

    logger.info('Getting the user with id:'+ Util.getPathParams(req)[3]);
    // Code necessary to consume the Weather API and respond
=======
// Path: GET api/users/getUserByUsername/{username}
module.exports.getUserByUsername = function getUserByUsername(req, res, next) {
    logger.debug('BaseUrl:' + req.originalUrl);
    logger.debug('Path:' + req.path);

    logger.info('Getting the user with username:' + Util.getPathParams(req)[3]);
    // Code necessary to consume the User API and respond
>>>>>>> 937d13736a756a62ac3e9e00d93a0bd7d1864908

    User.findOne(
        { username: Util.getPathParams(req)[3] },
        function (err, user) {
<<<<<<< HEAD
<<<<<<< HEAD
            if (err) {
=======
            if(err)
            {
>>>>>>> parent of 640652f... implémentation Users.js
                logger.info(err.message);
                res.json({
                    succes: true,
                    status: err.status || 500,
                    err: err
                });
=======
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
>>>>>>> 937d13736a756a62ac3e9e00d93a0bd7d1864908
            }
        }
<<<<<<< HEAD
    );
};
<<<<<<< HEAD

// Path : /users/updateUser/{userId}
    module.exports.updateUser = function updateUser(req, res, next) {

    User.update(
        {_id: Util.getPathParams(req)[3]},
        {
            $set: {
                firstname: sanitizer.escape(req.body.username),
                lastname: sanitizer.escape(req.body.lastname),
                username: sanitizer.escape(req.body.username),
                birthDate: sanitizer.escape(req.body.birthDate),
                email: sanitizer.escape(req.body.email),
                address: sanitizer.escape(req.body.address),
                phoneNumber: sanitizer.escape(req.body.phoneNumber)
            }
        },
        {multi: true}
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
                     user: user,
                     success: true,
                     status: 200
                });
            }

        });
};

// Path : /users/deleteUser/{userId}
module.exports.deleteUser = function deleteUser(req, res, next) {

    User.update(
        {_id: Util.getPathParams(req)[3]},
        {
            $set: { active: false }
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
=======
// Path: PUT api/users/updateUser/{userId}
module.exports.updateUser = function updateUser(req, res, next) {
    /*TODO @Thomas Je t'ai ajouté un param userObject en entrée dans le
    TODO swagger.json car il nous faut forcément un objet en entrée pour pouvoir màj*/
    res.set('Content-Type', 'application/json');
    res.status(200).json({message:'updateUser function not implemented yet'});
>>>>>>> 937d13736a756a62ac3e9e00d93a0bd7d1864908
};
=======
    )
// Path : /users/{username}
module.exports.updateUser = function updateUser (req, res, next) {

    };
};
>>>>>>> parent of 640652f... implémentation Users.js
