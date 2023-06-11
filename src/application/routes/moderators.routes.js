import { createModeratorCtrl } from '#application/controllers/moderators.controller.js';
import { registerModeratorDTO } from '#application/middlewares/dto/moderator.dto.js';
import { Router } from 'express';

export const moderatorRoutes = Router();

moderatorRoutes.post('/moderators/login');

moderatorRoutes.get('/moderators');

moderatorRoutes.get('/moderators/:id');

moderatorRoutes.post(
    '/moderators/register',
    registerModeratorDTO,
    createModeratorCtrl
);

moderatorRoutes.patch('/moderators/:id');

moderatorRoutes.delete('/moderators/:id');
