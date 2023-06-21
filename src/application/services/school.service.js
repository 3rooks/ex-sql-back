import { SchoolRepository } from '#database/repositories/school.repository.js';

export class SchoolService {
    constructor() {
        this.repo = new SchoolRepository();
    }
}
