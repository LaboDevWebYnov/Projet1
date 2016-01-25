/**
 * Created by Antoine on 24/01/2016.
 */
var logger = require('log4js').getLogger('controller.userAddress'),
    mongoose = require('mongoose'),
    sanitizer = require('sanitizer'),
    _ = require('lodash'),
    Util = require('./utils/util.js'),
    UserDB = require('../models/UserDB'),
    User = mongoose.model('User'),
    AddressDB = require('../models/AddressDB'),
    Address = mongoose.model('Address');

//Path : POST /addresses/{userId}/addAddress
module.exports.addAddress = function addAddress(req, res, next) {
    logger.info('Adding a new address to the user with id:\n ' + Util.getPathParams(req)[2]);

    var address = new Address({
        postCode: sanitizer.escape(req.body.postCode),
        city: sanitizer.escape(req.body.city),
        country: sanitizer.escape(req.body.country),
        line: sanitizer.escape(req.body.line)
    });

    address.save(function (err, savedAddress) {
        if (err)
            return next(err.message);

        if (_.isNull(savedAddress) || _.isEmpty(savedAddress)) {
            res.set('Content-Type', 'application/json');
            res.status(404).json(JSON.stringify({error: "Couldn't save address"}, null, 2));
        }
        else {
            logger.debug('Created address:' + savedAddress);
            User.findOneAndUpdate({_id: Util.getPathParams(req)[2]},
                {
                    $set: {
                        address: savedAddress
                    }
                },
                {new: true}, //means we want the DB to return the updated document instead of the old one
                function (err, updatedUserFromDB) {
                    if (err)
                        return next(err.message);
                    if (_.isNull(updatedUserFromDB) || _.isEmpty(updatedUserFromDB)) {
                        res.set('Content-Type', 'application/json');
                        res.status(404).json(JSON.stringify({error: "Couldn't update user with address"}, null, 2));
                    }
                    else {
                        logger.debug('Updated user with address', updatedUserFromDB);

                        res.set('Content-Type', 'application/json');
                        res.status(200).end(JSON.stringify(updatedUserFromDB || {}, null, 2));
                    }

                });
        }
    });
};

//Path : PUT /addresses/{userId}/updateAddress/{addressId}
module.exports.updateAddress = function updateAddress(req, res, next) {
    logger.info('Updating address with addressId: ' + Util.getPathParams(req)[2] + ' of user with id: ' + Util.getPathParams(req)[4]);
    Address.findOneAndUpdate({_id: Util.getPathParams(req)[4]},
        {
            $set: {
                postCode: sanitizer.escape(req.body.postCode),
                city: sanitizer.escape(req.body.city),
                country: sanitizer.escape(req.body.country),
                line: sanitizer.escape(req.body.line)
            }
        },
        {new: true}, //means we want the DB to return the updated document instead of the old one
        function (err, updatedAddressFromDB) {
            if (err)
                return next(err.message);
            if (_.isNull(updatedAddressFromDB) || _.isEmpty(updatedAddressFromDB)) {
                res.set('Content-Type', 'application/json');
                res.status(404).json(JSON.stringify({error: "Couldn't update address"}, null, 2));
            }
            else {
                logger.debug('Updated address', updatedAddressFromDB);
                User.findOne({_id: Util.getPathParams(req)[2]},
                    function (err, updatedUser) {
                        if (err)
                            return next(err.message);

                        if (_.isNull(updatedUser) || _.isEmpty(updatedUser)) {
                            res.set('Content-Type', 'application/json');
                            res.status(404).json(JSON.stringify(updatedUser || {}, null, 2));
                        }
                        else {

                            res.set('Content-Type', 'application/json');
                            res.status(200).end(JSON.stringify(updatedUser || {}, null, 2));
                        }
                    });
            }
        });
};