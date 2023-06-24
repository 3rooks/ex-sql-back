import { ModeratorController } from '#application/controllers/moderators.controller.js';
import { authToken } from '#application/middlewares/auth/auth.middleware.js';
import { ModeratorDTO } from '#application/middlewares/dto/moderator.dto.js';
import { Router } from 'express';

const dto = new ModeratorDTO();
const ctrl = new ModeratorController();

export const moderatorRoutes = Router();

moderatorRoutes.post('/mods/register', dto.register, ctrl.register);

moderatorRoutes.post('/mods/login', dto.login, ctrl.login);

moderatorRoutes.get('/mods', authToken);

moderatorRoutes.get('/mods/:id', authToken);

moderatorRoutes.patch('/mods/:id', authToken);

moderatorRoutes.delete('/mods/:id', authToken);
