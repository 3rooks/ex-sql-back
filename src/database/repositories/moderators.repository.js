import { ENTITIES } from '#constants/entities.js';
import { database } from '#database/database.js';

export class ModeratorsRepository {
    constructor() {
        this._db = database;
        this._entity = ENTITIES.MODERATORS;
    }

    createModerator = async (moderator) => {
        return await this._db.create(this._entity, moderator);
    };

    getAllModerators = async () => {
        return await this._db.getAll(this._entity);
    };

    getModeratorByEmail = async (email) => {
        return await this._db.getBy(this._entity, { email });
    };

    getModeratorById = async (moderatorId) => {
        return await this._db.getById(this._entity, moderatorId);
    };

    updateModerator = async (moderatorId, moderator) => {
        return await this._db.update(this._entity, moderatorId, moderator);
    };

    deleteModerator = async (moderatorId) => {
        return await this._db.delete(this._entity, moderatorId);
    };
}
