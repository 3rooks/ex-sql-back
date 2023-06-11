import { DOCS_PATH } from '#constants/paths.js';
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Taekwondo',
            description: 'Documentation (endpoints)',
            version: '1.0.0'
        }
    },
    apis: [`${DOCS_PATH}/**/*.js`]
};

export const swaggerDoc = swaggerJSDoc(options);
