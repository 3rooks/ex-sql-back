import { PersonController } from '#application/controllers/person.controller.js';
import { AuthTokenJWT } from '#application/middlewares/auth/auth.middleware.js';
import { PersonDTO } from '#application/middlewares/dto/person.dto.js';
import { Router } from 'express';

export class PersonRoutes {
    constructor() {
        this.route = Router();
        this.auth = AuthTokenJWT.auth;
        this.dto = new PersonDTO();
        this.ctrl = new PersonController();
        this.init();
    }

    init = () => {
        /**
         * @swagger
         * /api/v1/persons:
         *   get:
         *     summary: Get persons
         *     tags: [Persons]
         *     responses:
         *       200:
         *         description: Returns persons
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responseBodies/ModeratorCreated'
         *
         */
        this.route.get('/persons');

        /**
         * @swagger
         * /api/v1/persons:
         *   post:
         *     summary: Create person
         *     tags: [Persons]
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
        this.route.post('/persons');

        /**
         * @swagger
         * /api/v1/persons:
         *   post:
         *     summary: Create person
         *     tags: [Persons]
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
        this.route.post('/persons');
    };
}
