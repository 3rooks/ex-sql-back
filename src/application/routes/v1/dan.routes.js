import { AuthTokenJWT } from '#application/middlewares/auth/auth.middleware.js';
import { Router } from 'express';

export class DANRoutes {
    constructor() {
        this.route = Router();
        this.auth = AuthTokenJWT.auth;
        this.dto = '';
        this.ctrl = '';
        this.init();
    }

    init = () => {
        /**
         * @swagger
         * /api/v1/dan:
         *   get:
         *     summary: Get persons
         *     tags: [DANs]
         *     responses:
         *       200:
         *         description: Returns persons
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responseBodies/ModeratorCreated'
         *
         */
        this.route.get('dan');

        /**
         * @swagger
         * /api/v1/dan:
         *   post:
         *     summary: Create person
         *     tags: [DANs]
         *     security: [{ bearerAuth: [] }]
         *     responses:
         *       200:
         *         description: Create school
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responseBodies/ModeratorCreated'
         *
         */
        this.route.post('dan');

        /**
         * @swagger
         * /api/v1/dan:
         *   delete:
         *     summary: Create person
         *     tags: [DANs]
         *     security: [{ bearerAuth: [] }]
         *     responses:
         *       200:
         *         description: Create school
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responseBodies/ModeratorCreated'
         *
         */
        this.route.post('dan');
    };
}
