import { ModeratorRepository } from '#database/repositories/moderator.repository.js';
import { createHash } from '#lib/bcript.js';

export class ModeratorService {
    constructor() {
        this.repository = new ModeratorRepository();
    }

    createModerator = async (moderator) => {
        return await this.repository.create({
            ...moderator,
            password: await createHash(moderator.password)
        });
    };

    updateEmail = async (moderatorId, moderator) => {
        return await this.repository.updateModerator(moderatorId, {
            email: moderator.email
        });
    };

    updatePassword = async (moderatorId, moderator) => {
        return await this.repository.updateModerator(moderatorId, {
            password: moderator.newPassword
        });
    };

    getModeratorById = async (moderatorId) => {
        return await this.repository.getModeratorById(moderatorId);
    };

    getModeratorByEmail = async (moderator) => {
        return await this.repository.getModeratorByEmail(moderator.email);
    };
}