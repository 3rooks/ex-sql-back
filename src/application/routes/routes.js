import { Router } from 'express';
import { DANRoutes } from './v1/dan.routes.js';
import { GUPRoutes } from './v1/gup.routes.js';
import { ModeratorRoutes } from './v1/moderator.routes.js';
import { PersonRoutes } from './v1/person.routes.js';
import { SchoolRoutes } from './v1/school.routes.js';

export class V1Routes {
    constructor() {
        this.route = Router();
        this.gup = new GUPRoutes();
        this.dan = new DANRoutes();
        this.mod = new ModeratorRoutes();
        this.school = new SchoolRoutes();
        this.person = new PersonRoutes();
        this.init();
    }

    init = () => {
        this.route.use('/mods', this.mod.route);
        this.route.use('/gups', this.gup.route);
        this.route.use('/dans', this.dan.route);
        this.route.use('/schools', this.school.route);
        this.route.use('/persons', this.person.route);
    };
}
