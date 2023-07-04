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
        /**
         * @swagger
         * /api/v1/mods/register:
         *   post:
         *     summary: Register moderator
         *     tags: [Moderators]
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             $ref: '#/components/schemas/RegisterModerator'
         *     responses:
         *       201:
         *         description: Moderator created
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responseBodies/ModeratorCreated'
         *       400:
         *         description: Invalid fields
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responseBodies/WrongFields'
         *       409:
         *         description: Moderator already exist
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responseBodies/ModeratorConflict'
         *
         */
        this.route.post(
            '/mods/register',
            this.dto.register,
            this.ctrl.register
        );

        /**
         * @swagger
         * /api/v1/mods/login:
         *   post:
         *     summary: Login moderator
         *     tags: [Moderators]
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             $ref: '#/components/schemas/LoginModerator'
         *     responses:
         *       200:
         *         description: Login succesfully
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responseBodies/AuthToken'
         *       400:
         *         description: Invalid fields
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responseBodies/WrongFields'
         *       401:
         *         description: Unauthorized moderator
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responseBodies/Unauthorized'
         *
         */
        this.route.post('/mods/login', this.dto.login, this.ctrl.login);

        /**
         * @swagger
         * /api/v1/mods:
         *   get:
         *     summary: Get moderator
         *     tags: [Moderators]
         *     security: [{ bearerAuth: [] }]
         *     responses:
         *       200:
         *         description: Moderator info
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responseBodies/Moderator'
         *       401:
         *         description: Unauthorized moderator
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responseBodies/Unauthorized'
         *
         */
        this.route.get('/mods', this.auth, this.ctrl.getModerator);

        /**
         * @swagger
         * /api/v1/mods/update-email:
         *   post:
         *     summary: Update email moderator
         *     tags: [Moderators]
         *     security: [{ bearerAuth: [] }]
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             $ref: '#/components/schemas/UpdateModeratorEmail'
         *     responses:
         *       200:
         *         description: Moderator info
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responseBodies/ModeratorUpdated'
         *       400:
         *         description: Invalid fields
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responseBodies/WrongFields'
         *       401:
         *         description: Unauthorized moderator
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responseBodies/Unauthorized'
         *
         */
        this.route.post(
            '/mods/update-email',
            this.auth,
            this.dto.updateEmail,
            this.ctrl.updateEmail
        );

        /**
         * @swagger
         * /api/v1/update-password:
         *   post:
         *     summary: Update password moderator
         *     tags: [Moderators]
         *     security: [{ bearerAuth: [] }]
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             $ref: '#/components/schemas/UpdateModeratorPassword'
         *     responses:
         *       200:
         *         description: Moderator info
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responseBodies/ModeratorUpdated'
         *       400:
         *         description: Invalid fields
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responseBodies/WrongFields'
         *       401:
         *         description: Unauthorized moderator
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responseBodies/Unauthorized'
         *
         */
        this.route.post(
            '/mods/update-password',
            this.auth,
            this.dto.updateEmail,
            this.ctrl.updatePassword
        );
    };
}
