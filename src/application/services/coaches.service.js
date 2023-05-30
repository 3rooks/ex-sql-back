import { CoachesRepository } from '#src/database/repositories/coaches.repository.js';

class CoachesService {
    constructor(repository) {
        this._repo = repository;
    }
}

export const coachesService = new CoachesService(new CoachesRepository());
