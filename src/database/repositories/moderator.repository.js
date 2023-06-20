import { ENTITIES } from '#constants/entities.js';
import { MODERATOR_SCHEMA } from '#database/schemas/moderator.schema.js';
import { model } from 'mongoose';

export class ModeratorRepository {
    constructor() {
        this.model = model(ENTITIES.MODERATORS, MODERATOR_SCHEMA);
    }

    createModerator = async (moderator) => {
        return await this.model.create(moderator);
    };

    getAllModerators = async () => {
        return await this.model.find().exec();
    };

    getModeratorByEmail = async (email) => {
        return await this.model.findOne({ email }).exec();
    };

    getModeratorById = async (moderatorId) => {
        return await this.model.findById(moderatorId).exec();
    };

    updateModerator = async (moderatorId, moderator) => {
        return await this.model
            .findByIdAndUpdate(moderatorId, moderator)
            .exec();
    };

    deleteModerator = async (moderatorId) => {
        return await this.model.findByIdAndDelete(moderatorId).exec();
    };
}
