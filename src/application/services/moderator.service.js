import { ENTITIES } from '#constants/entities.js';
import { db } from '#database/database.js';
import { compareHash, createHash } from '#lib/bcript.js';
import { signAsync } from '#lib/jwt.js';

const { MODERATORS } = ENTITIES;

export class ModeratorsService {
    constructor() {
        this.repository = db.repositories;
    }

    createMod = async (mod) => {
        return await this.repository[MODERATORS].createModerator(mod);
    };

    createModerator = async (moderator) => {
        const { email, password } = moderator;

        const exist = await this.repository.getModeratorByEmail(email);

        if (exist) return { exist: true, data: exist };

        const data = await this.repository.createModerator({
            email,
            password: await createHash(password)
        });

        return { exist: false, data };
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
