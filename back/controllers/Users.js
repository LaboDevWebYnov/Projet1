/**
 * Created by Antoine on 15/12/2015.
 */
'use strict';

var logger = require('log4js').getLogger('Users'),
    mongoose = require('mongoose'),
    sanitizer = require('sanitizer'),
    UserDB = require('../models/UserDB'),
    User = mongoose.model('User'),
    AddressDB = require('../models/AddressDB'),
    Address = mongoose.model('Address');

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
        if(!err){
            res.json({
                success: true,
                status: 200
            });
        }else{
            res.json({
                success: false,
                status: err.status || 500,
                err: err
            });
        }
    });

    //res.json({"message":"not implemented yet"});

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