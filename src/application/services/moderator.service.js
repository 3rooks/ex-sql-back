import { ModeratorRepository } from '#database/repositories/moderator.repository.js';
import { createHash } from '#lib/bcript.js';

export class ModeratorService {
    constructor() {
        this.repository = new ModeratorRepository();
    }

    createModerator = async (moderator) => {
        const mod = await this.repository.create({
            ...moderator,
            password: await createHash(moderator.password)
        });

        const { role, ...rest } = mod.toObject();

        return rest;
    };

    deleteModerator = async (moderatorId) => {
        return await this.repository.deleteModerator(moderatorId);
    };

    getModeratorById = async (moderatorId) => {
        return await this.repository.getModeratorById(moderatorId);
    };

    getModByEmail = async (moderator) => {
        return await this.repository.getModeratorByEmail(moderator.email);
    };
}
