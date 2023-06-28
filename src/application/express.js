import { DOCUMENTATION } from '#utils/documentation/doc.js';
import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { ModeratorRoutes } from './routes/moderator.routes.js';
import { PersonRoutes } from './routes/person.routes.js';
import { SchoolRoutes } from './routes/school.routes.js';

export class Express {
    constructor() {
        this.app = express();
        this.mod = new ModeratorRoutes();
        this.person = new PersonRoutes();
        this.school = new SchoolRoutes();
        this.init();
    }

    init = () => {
        /** MIDDLEWARES */
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(DOCUMENTATION));

        /** ROUTES */
        this.app.use('/api/v1/', this.mod.route);
        this.app.use('/api/v1/', this.person.route);
        this.app.use('/api/v1/', this.school.route);

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
