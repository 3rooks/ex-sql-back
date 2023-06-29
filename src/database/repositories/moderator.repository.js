import { ENTITIES } from '#constants/entities.js';
import { MODERATOR_SCHEMA } from '#database/schemas/moderator.schema.js';
import { model } from 'mongoose';

export class ModeratorRepository {
    constructor() {
        this.model = model(ENTITIES.MODERATORS, MODERATOR_SCHEMA);
    }

    create = async (moderator) => {
        return await this.model.create(moderator);
    };

    getBy = async (search) => {
        return await this.model.findOne(search).lean().exec();
    };

    getAllModerators = async () => {
        return await this.model.find().exec();
    };

    getModeratorByEmail = async (email) => {
        return await this.model.findOne({ email }).lean().exec();
    };

    getModeratorById = async (moderatorId) => {
        return await this.model.findById(moderatorId).lean().exec();
    };

    updateModerator = async (moderatorId, moderator) => {
        return await this.model
            .findByIdAndUpdate(moderatorId, moderator, { new: true })
            .lean()
            .exec();
    };

    deleteModerator = async (moderatorId) => {
        return await this.model.findByIdAndDelete(moderatorId).exec();
    };
}
