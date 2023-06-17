import { ENTITIES } from '#constants/entities.js';
import { database } from '#database/database.js';

export class InstitutesRepository {
    constructor() {
        this._db = database;
        this._entity = ENTITIES.SCHOOLS;
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
