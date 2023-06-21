import { ModeratorRepository } from '#database/repositories/moderator.repository.js';
import { compareHash, createHash } from '#lib/bcript.js';
import { signAsync } from '#lib/jwt.js';

export class ModeratorsService {
    constructor() {
        this.repository = new ModeratorRepository();
    }

    createModerator = async (moderator) => {
        return await this.repository.createModerator({
            ...moderator,
            password: await createHash(moderator.password)
        });
    };

    loginModerator = async (moderator) => {
        const { email, password } = moderator;

        const exist = await this.repository.getModeratorByEmail(email);

        if (!exist) return {};

        const checkPass = await compareHash(password, exist);
        if (!checkPass) return {};

        const payload = { id: exist.id };
        const token = await signAsync(payload);

        return token;
    };

    deleteModerator = async (moderatorId) => {
        return await this.repository.deleteModerator(moderatorId);
    };

    getModeratorById = async (moderatorId) => {
        return await this.repository.getModeratorById(moderatorId);
    };

    getModByEmail = async (email) => {
        return await this.repository.getModeratorByEmail(email);
    };
}
