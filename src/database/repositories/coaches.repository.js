import { ENTITIES } from '#constants/entities.js';
import { database } from '#database/database.js';

export class CoachesRepository {
    constructor() {
        this._db = database;
        this._entity = ENTITIES.COACHES;
    }

    async createCoach() {}
}
