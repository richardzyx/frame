'use strict';
const Joi = require('joi');
const Boom = require('boom');

exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/',
        config: {
            description: 'Welcome, try a simple GET',
            notes: 'Returns a message',
            tags: ['api'],
            response: {
                schema: responseModel,
                failAction: function (request, reply, source, error) {

                    server.log(['error'], source);
                    return reply(Boom.badRequest(source));
                }
            }
        },
        handler: function (request, reply) {

            reply({ message: 'Welcome to the plot device.' });
        }
    });


    next();
};

const responseModel = Joi.object({
    message: Joi.string().label('Message')
}).options({ abortEarly: false });

exports.register.attributes = {
    name: 'index'
};
