'use strict';

describe('booljs-mailer', () => {
    var booljs  = require('bool.js')
    ,   Agent   = require('supertest-as-promised')
    ,   agent;

    before(() => {
        var instance = booljs('com.example.api', [ require.resolve('..') ]);
        return (instance
            .setBase('example')
            .run()
        ).then((app) => {
            agent = new Agent(app.server);
        });
    });

    it('send a test mail', () => {
        return agent.post('/mail').expect(200);
    });

});
