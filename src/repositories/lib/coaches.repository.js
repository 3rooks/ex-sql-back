export class CoachesRepository {
    /**
     *
     * @param {Database} database
     * @param {string} entity
     */
    constructor(database, entity) {
        this._entity = entity;
        this._db = database;
    }
}
