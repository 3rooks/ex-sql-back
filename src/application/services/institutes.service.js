import { InstitutesRepository } from '#src/database/repositories/institutes.repository.js';

class InstitutesService {
    constructor(repository) {
        this._repo = repository;
    }

    async createInstitute(institute) {
        return await this._repo.createInstitute(institute);
    }

    async getAllInstitutes() {
        return await this._repo.getAllInstitutes();
    }

    async getInstituteById(instituteId) {
        return await this._repo.getInstituteById(instituteId);
    }

    async updateInstitute(instituteId, institute) {
        return await this._repo.updateInstitute(instituteId, institute);
    }

    async deleteInstitute(instituteId) {
        return await this._repo.deleteInstitute(instituteId);
    }
}

export const institutesService = new InstitutesService(
    new InstitutesRepository()
);
