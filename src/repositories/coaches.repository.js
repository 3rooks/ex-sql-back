export class CoachRepository {
    /**
     *
     * @param {Database} database
     * @param {string} entity
     */
    constructor(database, entity) {
        this._entity = entity;
        this._db = database;
    }

    async createCoach(coach) {
        return await this._db.create(this._entity, coach);
    }

    async updateCoachById(id, coach) {
        return await this._db.updateById(this._entity, id, coach);
    }

    async getCoachById(userId) {
        // Lógica para obtener un usuario de la base de datos utilizando this.database
    }

    async getCoachByBelt(belt) {
        return await this._db.getBy(this._entity, { belt });
    }

    async deleteCoach(userId) {
        // Lógica para eliminar un usuario de la base de datos utilizando this.database
    }
}
