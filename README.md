# Bool.js - Mailer Middleware

[![Build Status](https://travis-ci.org/BoolJS/booljs-mailer.svg?branch=master)](https://travis-ci.org/BoolJS/booljs-mailer) [![Dependencies status for booljs-mailer](https://david-dm.org/booljs/booljs-mailer.svg)](https://david-dm.org/booljs/booljs-mailer) [![devDependency Status](https://david-dm.org/booljs/booljs-mailer/dev-status.svg)](https://david-dm.org/booljs/booljs-mailer#info=devDependencies) [![Code Climate](https://codeclimate.com/github/BoolJS/booljs-mailer/badges/gpa.svg)](https://codeclimate.com/github/BoolJS/booljs-mailer) [![Inline docs](http://inch-ci.org/github/booljs/booljs-mailer.svg?branch=master)](http://inch-ci.org/github/booljs/booljs-mailer)

[![booljs-mailer NPM icon](https://nodei.co/npm/booljs-mailer.png)](https://npmjs.com/packages/booljs-mailer)

[![Join the chat at https://gitter.im/BoolJS/booljs-mailer](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/BoolJS/booljs-mailer?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Description

`booljs-multer` allows developers to send mails through the API using `nodemailer` package.

## Install

Run,

```
npm i -S booljs-mailer
```

## Configure

Create a configuration file called `mail.json`. To find out the settings for this file, refer to [nodemailer's](https://github.com/nodemailer/nodemailer) documentation.

```json
{
    "options": {
        "service": "Mailgun",
        "auth": {
            "user": "postmaster@example.com",
            "pass": "<password>"
        }
    }
}
```

## Usage

In controllers' handlers, use it as part of the `request.mail` object.

```js
module.exports = function(app){
    var User = app.dao.User
    ,   Json = new app.views.Json();

    // ...

    this.sendList = function(req, res){
        User.list(function(users) {
            req.mail.sendMail({
                // Here you can use nodemailers' options for sendMail
            }, function(err) {
                if(err) json.error(err, res);
                json.standard(false, res);
            });
        });

    };

    // ...

};
```

## FAQ

### What is bool.js?
Bool.js is an MVC Framework. But is not just any other framework; it gives us back the power to choose how to organize a well-designed project, so we can choose our dependencies, craft our architecture, choose our data connectors, and finally, work based on cool development structures without hesitating about learning the framework as is.

Bool.js also reminds the importance of having a cool workspace structure. That's why it's based on namespaces, leading us to focus on our code rather than focusing on managing complicated references to other files in our project.

### Can I migrate my projects to bool.js?
Of course you can. Bool.js is Free Software (not as in a *free* beer, but in *free* as a bird). Just remember to update all of your dependencies, arrange your code in the right project structure (we're very tight at that) and finally, use Node.js `4.0.0` or further versions.
