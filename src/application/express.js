import { swaggerDoc } from '#lib/swagger.js';
import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { V1Routes } from './routes/routes.js';

export class Express {
    constructor() {
        this.app = express();
        this.v1 = new V1Routes();
        this.init();
    }

    init = () => {
        /** MIDDLEWARES */
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

        /** ROUTES */
        this.app.use('/api/v1', this.v1.route);

        /** HANDLE ERROR */
        this.app.use((err, req, res, next) => {
            res.err = {
                message: err.message,
                stack: err.stack
            };
            next(err);
        });
        this.app.use((err, req, res, next) => {
            console.log(err.message, err.stack);
            return res.status(500).send(err.message);
        });
    };
}
