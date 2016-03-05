/**
 * Created by Antoine on 02/03/2016.
 */
'use strict';

var logger = require('log4js').getLogger('controller.auth'),
    mongoose = require('mongoose'),
    _ = require('lodash'),
    UserDB = require('../models/UserDB'),
    User = mongoose.model('User'),
    AddressDB = require('../models/AddressDB'),
    Address = mongoose.model('Address');

// Path : POST /users/auth
module.exports.authenticate = function authenticate(req, res, next) {
    logger.info('Authenticating user with login: ' + req.body.login);

    var login = req.body.login;
    var password = req.body.password;

    User.getAuthenticated(login, password,
        function (err, user) {
            if (err)
                return next(err.message);

            if (_.isNull(user) || _.isEmpty(user)) {
                res.set('Content-Type', 'application/json');
                res.status(404).json(JSON.stringify('Invalid credentials' || {}, null, 2));
            }
            else {
                //TODO create token and insert it in req header ?
                logger.debug("Authenticated user object: \n" + user);
                res.set('Content-Type', 'application/json');
                res.status(200).end(JSON.stringify(user || {}, null, 2));
            }
        });
};