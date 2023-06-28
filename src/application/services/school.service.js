import { SchoolRepository } from '#database/repositories/school.repository.js';

export class SchoolService {
    constructor() {
        this.repo = new SchoolRepository();
    }

    getSchoolByName = async (name) => {
        return await this.repo.getBy({ name });
    };

    createSchool = async (school) => {
        return await this.repo.create(school);
    };

    updateSchoool = async (id, school) => {
        return await this.repo.update(id, school);
    };
}
