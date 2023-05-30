import { ENTITIES } from '#constants/entities.js';
import { Database } from '#database/database.js';
import { CoachesModel } from '#database/models/coaches.model.js';

export class CoachesRepository extends Database {
    constructor() {
        super();
        this._entity = ENTITIES.COACHES;
        this.models[ENTITIES.COACHES] = CoachesModel;
    }

    async createCoach() {}
}
