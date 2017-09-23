'use strict';


exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/',
        config: {
            description: 'Welcome, try a simple GET',
            notes: 'Returns a message',
            tags: ['api']
        },
        handler: function (request, reply) {

            reply({ message: 'Welcome to the plot device.' });
        }
    });


    next();
};


exports.register.attributes = {
    name: 'index'
};
