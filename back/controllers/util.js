/**
 * Created by Ezehollar on 08/01/2016.
 */
"use strict";

var url = require('url'),
    express = require('express');

module.exports.getPathParams = function getPathParams(req){
    logger.info('TEST');
    return url.parse(req.url).pathname.split('/').slice(1);
};


