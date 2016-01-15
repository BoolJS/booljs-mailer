'use strict';

var API         = require('bool.js/api')
,   nodemailer  = require('nodemailer');

module.exports = new API.Middleware('booljs-mailer', {
    action: function (_instance, router, route) {
        var configuration   = _instance.configuration.get('mail')
        ,   transporterOpts = configuration.options;

        var mail = nodemailer.createTransport(transporterOpts);
        return function (req, res, next) {
            req.mail = mail;
            next();
        };
    }
});
