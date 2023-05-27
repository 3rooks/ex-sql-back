import { ctrl } from '#src/application/controllers/coach.controller.js';
import express from 'express';

const application = express();
application.use(express.json());
application.use(express.urlencoded({ extended: true }));
application.use('/api', (req, res) => {
    return res.json({ works: 'works' });
});
application.use('/', ctrl.hello);

application.use((err, req, res, next) => {
    res.err = {
        message: err.message,
        stack: err.stack
    };
    next(err);
});
application.use((err, req, res, next) => {
    return res.status(500).send(err.message);
});

export default application;

export class ExpressApplication {
    _prefix = '/api/v1';

    constructor(app, routes) {
        this.app = app;
        this._routes = routes;
        this._init();
    }

    _init = () => {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        // this.app.use(express.static(PUBLIC_PATH));
        // this.app.use(cors());
        // this.app.use(
        //     '/docs',
        //     swaggerUiExpress.serve,
        //     swaggerUiExpress.setup(swaggerDoc, {
        //         customSiteTitle: 'Documentation'
        //     })
        // );


        // Recorre todas las rutas y registra cada una con el prefijo
        Object.values(this._routes).forEach(route => {
            this.app.use(this._prefix, route.router);
        });

        this.app.use(this._prefix, this._routes.users.router);
        this.app.use(this._prefix, this._routes.movies.router);
        this.app.use(this._prefix, this._routes.genders.router);
        this.app.use(this._prefix, this._routes.characters.router);

        this.app.use((err, _, res, __) => {
            console.log(err.stack);
            res.status(500).json({ errors: err.message });
        });
    };
}
