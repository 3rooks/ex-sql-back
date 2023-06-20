import { ENTITIES } from '#constants/entities.js';
import { SCHOOL_SCHEMA } from '#database/schemas/school.schema.js';
import { model } from 'mongoose';

export class SchoolRepository {
    constructor() {
        this.model = model(ENTITIES.SCHOOLS, SCHOOL_SCHEMA);
    }
}
