export class InstitutesService {
    constructor(repository) {
        this._repo = repository;
    }

    createInstitute = async (institute) => {
        return await this._repo.createInstitute(institute);
    };

    getAllInstitutes = async () => {
        return await this._repo.getAllInstitutes();
    };

    getInstituteById = async (instituteId) => {
        return await this._repo.getInstituteById(instituteId);
    };

    updateInstitute = async (instituteId, institute) => {
        return await this._repo.updateInstitute(instituteId, institute);
    };

    deleteInstitute = async (instituteId) => {
        return await this._repo.deleteInstitute(instituteId);
    };
}
