import { SchoolController } from '#application/controllers/school.controller.js';
import { AuthTokenJWT } from '#application/middlewares/auth/auth.middleware.js';
import { SchoolDTO } from '#application/middlewares/dto/school.dto.js';
import { Router } from 'express';

export class SchoolRoutes {
    constructor() {
        this.route = Router();
        this.auth = AuthTokenJWT.auth;
        this.dto = new SchoolDTO();
        this.ctrl = new SchoolController();
        this.init();
    }

    init = () => {
        /**
         * @swagger
         * /api/v1/schools:
         *   get:
         *     summary: Get Schools
         *     tags: [Schools]
         *     responses:
         *       200:
         *         description: Returns all schools
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responseBodies/School'
         */
        this.route.get('/', this.ctrl.getAll);

        /**
         * @swagger
         * /api/v1/schools:
         *   post:
         *     summary: Create Schools
         *     tags: [Schools]
         *     security: [{ bearerAuth: [] }]
         *     responses:
         *       200:
         *         description: Create school
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responseBodies/ModeratorCreated'
         */
        this.route.post(
            '/schools',
            this.auth,
            this.dto.create,
            this.ctrl.create
        );

        /**
         * @swagger
         * /api/v1/schools/{schoolId}:
         *   put:
         *     summary: Update School
         *     tags: [Schools]
         *     security: [{ bearerAuth: [] }]
         *     responses:
         *       200:
         *         description: Create school
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responseBodies/ModeratorCreated'
         */
        this.route.put(
            '/schools/:schoolId',
            this.auth,
            this.dto.params,
            this.dto.update,
            this.ctrl.update
        );

        /**
         * @swagger
         * /api/v1/schools/{schoolId}:
         *   delete:
         *     summary: Update School
         *     tags: [Schools]
         *     security: [{ bearerAuth: [] }]
         *     responses:
         *       200:
         *         description: Create school
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responseBodies/ModeratorCreated'
         */
        this.route.delete(
            '/schools/:schoolId',
            this.auth,
            this.dto.params,
            this.ctrl.delete
        );
    };
}
