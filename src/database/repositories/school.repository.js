import { ENTITIES } from '#constants/entities.js';
import { SCHOOL_SCHEMA } from '#database/schemas/school.schema.js';
import { model } from 'mongoose';

export class SchoolRepository {
    constructor() {
        this.model = model(ENTITIES.SCHOOLS, SCHOOL_SCHEMA);
    }

    getBy = async (search) => {
        return await this.model.findOne(search).exec();
    };

    create = async (school) => {
        return await this.model.create(school);
    };

    update = async (schoolId, newSchool) => {
        return await this.model.findByIdAndUpdate(schoolId, newSchool).exec();
    };
}
