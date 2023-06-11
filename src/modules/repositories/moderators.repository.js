import { ENTITIES } from '#constants/entities.js';

export class ModeratorsRepository {
    constructor(database) {
        this.db = database;
        this._entity = ENTITIES.MODERATORS;
    }

    async createModerator(moderator) {
        return await this.db.create(this._entity, moderator);
    }

    async getAllModerators() {
        return await this.db.getAll(this._entity);
    }

    async getModeratorById(moderatorId) {
        return await this.db.getById(this._entity, moderatorId);
    }

    async updateModerator(moderatorId, moderator) {
        return await this.db.update(this._entity, moderatorId, moderator);
    }

    async deleteModerator(moderatorId) {
        return await this.db.delete(this._entity, moderatorId);
    }
}
