import { ENTITIES } from '#constants/entities.js';

export class CoachesRepository {
    constructor(database) {
        this.db = database;
        this._entity = ENTITIES.COACHES;
    }

    async createCoach() {}
}
