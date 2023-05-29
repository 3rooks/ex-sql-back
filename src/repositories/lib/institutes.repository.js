export class InstitutesRepository {
    /**
     *
     * @param {Database} database
     * @param {string} entity
     */
    constructor(database, entity) {
        this._entity = entity;
        this._db = database;
    }

    async createInstitute(institute) {
        return await this._db.create(this._entity, institute);
    }

    async getAllInstitutes() {
        return await this._db.getAll(this._entity);
    }

    async getInstituteById(instituteId) {
        return await this._db.getById(this._entity, instituteId);
    }

    async updateInstitute(instituteId, institute) {
        return this._db.updateById(this._entity, instituteId, institute);
    }

    async deleteInstitute(instituteId) {
        return this._db.deleteById(this._entity, instituteId);
    }
}
