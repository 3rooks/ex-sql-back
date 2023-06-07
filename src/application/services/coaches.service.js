import { db } from '#database/database.js';
import { CoachesRepository } from '#database/repositories/coaches.repository.js';

class CoachesService {
    constructor(repository) {
        this._repo = repository;
    }
}

export const coachesService = new CoachesService(new CoachesRepository(db));
