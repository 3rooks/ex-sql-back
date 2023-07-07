import { ENTITIES } from '#constants/entities.js';
import { RepositoryRegister } from '#database/repositories/repository.register.js';
import { createHash } from '#lib/bcript.js';

export class ModeratorService {
    constructor() {
        this.moderator = ENTITIES.MODERATORS;
        this.repository = RepositoryRegister.repositories;
    }

    createModerator = async (moderator) => {
        return await this.repository[this.moderator].createModerator({
            ...moderator,
            password: await createHash(moderator.password)
        });
    };

    getModeratorById = async (moderatorId) => {
        return await this.repository[this.moderator].getModeratorById(
            moderatorId
        );
    };

    updateEmail = async (moderatorId, moderator) => {
        return await this.repository[this.moderator].updateModerator(
            moderatorId,
            {
                email: moderator.email
            }
        );
    };

    updatePassword = async (moderatorId, moderator) => {
        return await this.repository[this.moderator].updateModerator(
            moderatorId,
            {
                password: await createHash(moderator.newPassword)
            }
        );
    };

    getModeratorByEmail = async (moderator) => {
        return await this.repository[this.moderator].getByModerator({
            email: moderator.email
        });
    };

    getAllModerators = async () => {
        return await this.repository[this.moderator].getAllModerators();
    };

    changeActivityModerator = async (moderatorId, active) => {
        return await this.repository[this.moderator].updateModerator(
            moderatorId,
            {
                isActive: active
            }
        );
    };
}
