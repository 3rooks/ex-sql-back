import { SchoolController } from '#application/controllers/school.controller.js';
import { SchoolDTO } from '#application/middlewares/dto/school.dto.js';
import { Router } from 'express';

export class SchoolRoutes {
    constructor() {
        this.route = Router();
        this.dto = new SchoolDTO();
        this.ctrl = new SchoolController();
        this.init();
    }

    init = () => {
        this.route.post('/schools', this.dto.create, this.ctrl.create);

        this.route.patch(
            '/schools/:schoolId',
            this.dto.params,
            this.dto.update,
            this.ctrl.update
        );
    };
}
