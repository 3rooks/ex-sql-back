import { PersonController } from '#application/controllers/person.controller.js';
import { PersonDTO } from '#application/middlewares/dto/person.dto.js';
import { Router } from 'express';

export class PersonRoutes {
    constructor() {
        this.route = Router();
        this.dto = new PersonDTO();
        this.ctrl = new PersonController();
        this.init();
    }

    init = () => {
        this.route.post('/persons');

        this.route.post('/persons');

        this.route.get('/persons');
    };
}
