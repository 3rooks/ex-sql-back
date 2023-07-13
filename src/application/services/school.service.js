import { ENTITIES } from '#constants/entities.js';
import { RepositoryRegister } from '#database/repositories/repository.register.js';

export class SchoolService {
    constructor() {
        this.school = ENTITIES.SCHOOLS;
        this.repository = RepositoryRegister.repositories;
    }

    getSchoolByName = async (name) => {
        return await this.repository[this.school].getSchoolByName(name);
    };

    createSchool = async (school) => {
        return await this.repository[this.school].createSchool(school);
    };

    getAllSchools = async () => {
        return await this.repository[this.school].getAllSchools();
    };

    updateSchool = async (id, school) => {
        return await this.repository[this.school].updateSchool(id, school);
    };

    getSchoolById = async (id) => {
        return await this.repository[this.school].getSchoolById(id);
    };

    deleteSchoolById = async (id) => {
        return await this.repository[this.school].deleteSchoolById(id);
    };
}
