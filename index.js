'use strict';

var API         = require('bool.js/api')
,   nodemailer  = require('nodemailer');

module.exports = class BoolJSMailer extends API.Middleware {
    constructor() {
        super('booljs-mailer');
    }

    action(_instance) {
        var app             = _instance.getComponents()
        ,   configuration   = app.configuration.get('mail')
        ,   transporterOpts = configuration.options;

        var mail = nodemailer.createTransport(transporterOpts);
        return function (req, res, next) {
            req.mail = mail;
            next();
        };
    }
};
