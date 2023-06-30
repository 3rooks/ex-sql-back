import { ENTITIES } from '#constants/entities.js';
import { MODERATOR_SCHEMA } from '#database/schemas/moderator.schema.js';
import { model } from 'mongoose';

export class ModeratorRepository {
    constructor() {
        this.model = model(ENTITIES.MODERATORS, MODERATOR_SCHEMA);
    }

    getAllModerators = async () => {
        return await this.model.find().lean().exec();
    };

    createModerator = async (moderator) => {
        return await this.model.create(moderator);
    };

    getModeratorById = async (moderatorId) => {
        return await this.model.findById(moderatorId).lean().exec();
    };

    getByModerator = async (search) => {
        return this.model.findOne(search).lean().exec();
    };

    updateModerator = async (moderatorId, moderator) => {
        return await this.model
            .findByIdAndUpdate(moderatorId, moderator, { new: true })
            .lean()
            .exec();
    };
}
