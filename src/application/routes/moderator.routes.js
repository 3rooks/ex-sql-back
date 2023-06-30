import { ModeratorController } from '#application/controllers/moderator.controller.js';
import { AuthTokenJWT } from '#application/middlewares/auth/auth.middleware.js';
import { ModeratorDTO } from '#application/middlewares/dto/moderator.dto.js';
import { Router } from 'express';

export class ModeratorRoutes {
    constructor() {
        this.route = Router();
        this.auth = AuthTokenJWT.auth;
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

        this.route.get('/mods', this.auth, this.ctrl.getModerator);

        this.route.post(
            '/mods/update-email',
            this.auth,
            this.dto.updateEmail,
            this.ctrl.updateEmail
        );

        this.route.post(
            '/mods/update-password',
            this.auth,
            this.dto.updateEmail,
            this.ctrl.updatePassword
        );
    };
}
