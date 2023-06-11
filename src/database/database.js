import { ENTITIES } from '#constants/entities.js';
import { sequelize } from '#database/dao/sequelize.js';
import { CoachesModel } from './models/coaches.model.js';
import { InstitutesModel } from './models/institutes.model.js';
import { ModeratorsModel } from './models/moderators.model.js';
import { StudentsModel } from './models/students.model.js';

class Database {
    constructor(sequelize) {
        this._sequelize = sequelize;
        this._models = {
            [ENTITIES.COACHES]: CoachesModel,
            [ENTITIES.STUDENTS]: StudentsModel,
            [ENTITIES.INSTITUTES]: InstitutesModel,
            [ENTITIES.MODERATORS]: ModeratorsModel
        };
    }

    async connect() {
        await this._sequelize.connection();
    }

    async disconnect() {
        await this._sequelize.disconnect();
    }

    async getBy(entity, data) {
        return await this._models[entity].findOne({ where: data });
    }

    async getAll(entity, search) {
        return await this._models[entity].findAll(search);
    }

    async getById(entity, id, options) {
        return await this._models[entity].findByPk(id, options);
    }

    async create(entity, data) {
        return await this._models[entity].create(data);
    }

    async update(entity, id, data) {
        return await this._models[entity].update(data, { where: { id } });
    }

    async delete(entity, id) {
        return await this._models[entity].destroy({ where: { id } });
    }
}

export const db = new Database(sequelize);
