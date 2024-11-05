require('dotenv').config();
const Hapi = require('@hapi/hapi');
const routes = require('../server/routes');
const initializeModel = require('../services/loadModel');
const InputValidationError = require('../exceptions/InputValidationError');
 
(async () => {
    const server = Hapi.server({
        port: process.env.PORT || 8080,
        host: '0.0.0.0',
        routes: {
            cors: {
                origin: ['*']
            }
        }
    });

    const model = await initializeModel();
    server.app.model = model;

    server.route(routes);

    server.ext('onPreResponse', (request, h) => {
        const { response } = request;

        if (response instanceof InputValidationError) {
            const customResponse = h.response({
                status: 'fail',
                message: response.message
            });
            customResponse.code(response.statusCode);
            return customResponse;
        }

        if (response.isBoom) {
            const errorResponse = h.response({
                status: 'error',
                message: response.message
            });
            errorResponse.code(response.output.statusCode);
            return errorResponse;
        }

        return h.continue;
    });

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
})();