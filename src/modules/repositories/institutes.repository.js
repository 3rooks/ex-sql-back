import { ENTITIES } from '#constants/entities.js';

export class InstitutesRepository {
    constructor(database) {
        this.db = database;
        this._entity = ENTITIES.INSTITUTES;
    }

    async createInstitute(institute) {
        return await this.__create(this._entity, institute);
    }

    async getAllInstitutes() {
        return await this.__getAll(this._entity);
    }

    async getInstituteById(instituteId) {
        return await this.__getById(this._entity, instituteId);
    }

    async updateInstitute(instituteId, institute) {
        return await this.__updateById(this._entity, instituteId, institute);
    }

    async deleteInstitute(instituteId) {
        return await this.__deleteById(this._entity, instituteId);
    }
}
