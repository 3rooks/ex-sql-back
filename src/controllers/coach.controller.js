import { CoachService } from '#services/coach.service.js';

export class CoachController {
    constructor(userService) {
        this.userService = userService;
    }

    async hello(req, res) {
        res.json({ asd: 'ASDASD' });
    }

    async createUser(req, res) {
        // Lógica para crear un usuario utilizando this.userService
    }

    async updateUser(req, res) {
        // Lógica para actualizar un usuario utilizando this.userService
    }

    async deleteUser(req, res) {
        // Lógica para eliminar un usuario utilizando this.userService
    }

    async getUser(req, res) {
        // Lógica para obtener un usuario utilizando this.userService
    }

    async createCoach(req, res) {
        try {
            const { name, surname, belt } = req.body;
            const coach = await this.service.createCoach(name, surname, belt);
            res.status(201).json(coach);
        } catch (error) {
            res.status(500).json({ error: 'Error creating coach' });
        }
    }

    // Resto de los métodos del controlador...
}

export const ctrl = new CoachController(new CoachService());
