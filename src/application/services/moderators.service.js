import { ModeratorsRepository } from '#database/repositories/moderators.repository.js';
import { compareHash, createHash } from '#lib/bcript.js';
import { signAsync } from '#lib/jwt.js';

export class ModeratorsService {
    constructor() {
        this._repository = new ModeratorsRepository();
    }

    createMod = async (mod) => {
        return await this._repository.createModerator(mod);
    };

    createModerator = async (moderator) => {
        const { email, password } = moderator;

        const exist = await this._repository.getModeratorByEmail(email);

        if (exist) return { exist: true, data: exist };

        const data = await this._repository.createModerator({
            email,
            password: await createHash(password)
        });

        return { exist: false, data };
    };

    loginModerator = async (moderator) => {
        const { email, password } = moderator;

        const exist = await this._repository.getModeratorByEmail(email);

        if (!exist) return {};

        const checkPass = await compareHash(password, exist);
        if (!checkPass) return {};

        const payload = { id: exist.id };
        const token = await signAsync(payload);

        return token;
    };

    deleteModerator = async (moderatorId) => {
        return await this._repository.deleteModerator(moderatorId);
    };

    getModeratorById = async (moderatorId) => {
        return await this._repository.getModeratorById(moderatorId);
    };

    getModByEmail = async (email) => {
        return await this._repository.getModeratorByEmail(email);
    };
}
