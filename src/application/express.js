import { DOCUMENTATION } from '#utils/documentation/doc.js';
import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { moderatorRoutes } from './routes/moderators.routes.js';

export const application = express();

// middlewares
application.use(cors());
application.use(express.json());
application.use(express.urlencoded({ extended: false }));
application.use('/docs', swaggerUi.serve, swaggerUi.setup(DOCUMENTATION));

// routes
// application.use('/api/v1');
// application.use('/api/v1');
// application.use('/api/v1');
application.use('/api/v1', moderatorRoutes);

// handle error
application.use((err, req, res, next) => {
    res.err = {
        message: err.message,
        stack: err.stack
    };
    next(err);
});
application.use((err, req, res, next) => {
    console.log(err.message, err.stack);
    return res.status(500).send(err.message);
});
