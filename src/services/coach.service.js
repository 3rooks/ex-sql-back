export class CoachService {
    constructor(coachRepository) {
        this.userRepository = coachRepository;
    }

    async createUser(user) {
        // Lógica para crear un usuario utilizando this.userRepository
    }

    async updateUser(user) {
        // Lógica para actualizar un usuario utilizando this.userRepository
    }

    async deleteUser(userId) {
        // Lógica para eliminar un usuario utilizando this.userRepository
    }

    async getUser(userId) {
        // Lógica para obtener un usuario utilizando this.userRepository
    }
}
