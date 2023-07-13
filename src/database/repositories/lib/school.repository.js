import { ENTITIES } from '#constants/entities.js';
import { SCHOOL_SCHEMA } from '#database/schemas/school.schema.js';
import { model } from 'mongoose';

export class SchoolRepository {
    constructor() {
        this.model = model(ENTITIES.SCHOOLS, SCHOOL_SCHEMA);
    }

    getAllSchools = async () => {
        return await this.model.find().lean().exec();
    };

    createSchool = async (school) => {
        return await this.model.create(school);
    };

    updateSchool = async (schoolId, newSchool) => {
        return await this.model
            .findByIdAndUpdate(schoolId, newSchool, { new: true })
            .lean()
            .exec();
    };

    getSchoolById = async (id) => {
        return await this.model.findById(id).lean().exec();
    };

    deleteSchoolById = async (id) => {
        return await this.model.findByIdAndUpdate(id, { isActive: false });
    };

    getSchoolByName = async (name) => {
        return await this.model.findOne({ name }).lean().exec();
    };
}
