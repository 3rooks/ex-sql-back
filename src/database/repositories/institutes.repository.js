import { ENTITIES } from '#src/constants/entities.js';
import { Database } from '#src/database/database.js';
import { InstitutesModel } from '#src/database/models/institutes.model.js';

export class InstitutesRepository extends Database {
    constructor() {
        super();
        this._entity = ENTITIES.INSTITUTES;
        this.models[ENTITIES.INSTITUTES] = InstitutesModel;
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
