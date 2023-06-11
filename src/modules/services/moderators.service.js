import { createHash } from '#lib/bcript.js';

export class ModeratorsService {
    constructor(repository) {
        this._repo = repository;
    }

    async createModerator(moderator) {
        moderator.password = createHash(moderator.password);

        return await this._repo.createModerator(moderator);
    }

    async deleteModerator(moderatorId) {
        return await this._repo.deleteModerator(moderatorId);
    }
}
