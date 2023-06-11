import { ModeratorsController } from '#application/controllers/moderators.controller.js';
import { authToken } from '#application/middlewares/auth/auth.middleware.js';
import { moderatorDTO } from '#application/middlewares/dto/moderators/register.dto.js';
import { Router } from 'express';

const ctrl = new ModeratorsController();

export const moderatorRoutes = Router();

moderatorRoutes.post('/moderators/login', moderatorDTO, ctrl.login);

moderatorRoutes.post('/moderators/register', moderatorDTO, ctrl.register);

moderatorRoutes.get('/moderators', authToken);

moderatorRoutes.get('/moderators/:id', authToken);

moderatorRoutes.patch('/moderators/:id', authToken);

moderatorRoutes.delete('/moderators/:id', authToken);
