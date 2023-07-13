import { AuthTokenJWT } from '#application/middlewares/auth/auth.middleware.js';
import { Router } from 'express';

export class GUPRoutes {
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
         * /api/v1/gup:
         *   get:
         *     summary: Get persons
         *     tags: [GUPs]
         *     responses:
         *       200:
         *         description: Returns persons
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responseBodies/ModeratorCreated'
         *
         */
        this.route.get('gup');

        /**
         * @swagger
         * /api/v1/gup:
         *   post:
         *     summary: Create person
         *     tags: [GUPs]
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
        this.route.post('gup');

        /**
         * @swagger
         * /api/v1/gup:
         *   delete:
         *     summary: Create person
         *     tags: [GUPs]
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
        this.route.post('gup');
    };
}
