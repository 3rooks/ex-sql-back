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
        const { email } = moderator;

        const mod = await this.repository.getBy({ email });
        console.log('MODERATOR', mod);

        if (!mod) return false;

        const { role, ...rest } = mod;

        return rest;
    };
}
