/**
 * Created by Ezehollar on 08/01/2016.
 */
"use strict";

var url = require('url'),
    express = require('express'),
    logger = require('log4js').getLogger('controller.util');

module.exports.getPathParams = function getPathParams(req){
    return url.parse(req.url).pathname.split('/').slice(1);
};


