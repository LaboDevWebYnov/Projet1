/**
 * Created by Antoine on 15/12/2015.
 */
'use strict';

var logger = require('log4js').getLogger('users'),
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