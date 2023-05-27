export class InstitutesRepository {
    constructor(database) {
        this.database = database;
    }

    async createCoach(coach) {
        return await this.database.create(coach);
    }

    async updateCoach(user) {
        // Lógica para actualizar un usuario en la base de datos utilizando this.database
    }

    async deleteCoach(userId) {
        // Lógica para eliminar un usuario de la base de datos utilizando this.database
    }

    async getCoach(userId) {
        // Lógica para obtener un usuario de la base de datos utilizando this.database
    }
}
