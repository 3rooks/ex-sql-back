import { ENTITIES } from '#constants/entities.js';
import { RepositoryRegister } from '#database/repositories/repository.register.js';

export class SchoolService {
    constructor() {
        this.school = ENTITIES.SCHOOLS;
        this.repository = RepositoryRegister.repositories;
    }

    getSchoolByName = async (name) => {
        return await this.repository.getBy({ name });
    };

    createSchool = async (school) => {
        return await this.repository.create(school);
    };

    updateSchoool = async (id, school) => {
        return await this.repository.update(id, school);
    };
}
