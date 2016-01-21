/**
 * Created by Ezehollar on 08/01/2016.
 */
"use strict";

var url = require('url'),
    express = require('express'),
    bcrypt = require('bcryptjs'),
    logger = require('log4js').getLogger('controller.util');

module.exports.getPathParams = function getPathParams(req){
    return url.parse(req.url).pathname.split('/').slice(1);
};

module.exports.getPassword = function getPassword(req, res, next) {
    logger.info('Getting password from db for user with id:' + Util.getPathParams(req)[2]);

    return User.findById(
        getPathParams(req)[2],
        function (err, user) {
         if (err)
          next(err.message);

         logger.debug('password retrieved:' + user.password);
         //if (!! user.password ||_.isNull(user.password) || _.isEmpty(user.password)) {
         //    logger.error('No password found :o !');
         //}

         next(user.password);

        });
 };

 module.exports.saltPassword = function saltPassword(password, next) {
      logger.debug('Salting password...:' + password);
      bcrypt.genSalt(10, function (err, salt) {
             if (err) {
               return next(err);
             }

              bcrypt.hash(password, salt, function (err, hash) {
                     if (err) {
                       return next(err);
                     }

                     password = hash;
                     logger.debug('Salted Password:' + password);
                     return next(password);
              });
      });
 };

 module.exports.compareSaltedPasswords = function compareSaltedPasswords(saltedPassword, dbOldPassword) {
     //compare dbOldPassword & oldPassword
     //if not good, don't update and return bad status
     if (saltedPassword == dbOldPassword) {
         logger.debug('Password are the same. Continue');
         return true;
     }
     logger.error('aborting because old passwords doesn\'t match...');
     return false

     //if good then return to update
};
