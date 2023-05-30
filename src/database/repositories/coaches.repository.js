import { ENTITIES } from '#src/constants/entities.js';
import { Database } from '#src/database/database.js';
import { CoachesModel } from '#src/database/models/coaches.model.js';

export class CoachesRepository extends Database {
    constructor() {
        super();
        this._entity = ENTITIES.COACHES;
        this.models[ENTITIES.COACHES] = CoachesModel;
    }

    async createCoach() {}
}
