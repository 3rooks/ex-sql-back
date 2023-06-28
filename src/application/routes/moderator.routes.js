import { ModeratorController } from '#application/controllers/moderator.controller.js';
import { ModeratorDTO } from '#application/middlewares/dto/moderator.dto.js';
import { Router } from 'express';

export class ModeratorRoutes {
    constructor() {
        this.route = Router();
        this.dto = new ModeratorDTO();
        this.ctrl = new ModeratorController();
        this.init();
    }

    init = () => {
        this.route.post(
            '/mods/register',
            this.dto.register,
            this.ctrl.register
        );

        this.route.post('/mods/login', this.dto.login, this.ctrl.login);

        this.route.get('/mods/');
    };
}
