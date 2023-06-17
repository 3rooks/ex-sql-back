import { ENTITIES } from '#constants/entities.js';
import { DANHistoryModel } from './models/dan-history.model.js';
import { GUPHistoryModel } from './models/gup-history.model.js';
import { ModeratorsModel } from './models/moderators.model.js';
import { PersonsModel } from './models/persons.model.js';
import { SchoolHistoryModel } from './models/school-history.js';
import { SchoolsModel } from './models/schools.model.js';
import { SpecializationsModel } from './models/specialization.model.js';

export class Database {
    constructor() {
        this._models = {
            [ENTITIES.MODERATORS]: ModeratorsModel,
            [ENTITIES.PERSONS]: PersonsModel,
            [ENTITIES.SCHOOLS]: SchoolsModel,
            [ENTITIES.SPECILIZATIONS]: SpecializationsModel,
            [ENTITIES.SCHOOLHISTORYS]: SchoolHistoryModel,
            [ENTITIES.DAN]: DANHistoryModel,
            [ENTITIES.GUP]: GUPHistoryModel
        };
    }

    static connect = async (sequelize) => {
        try {
            await sequelize.auth();
            await sequelize.sync();
        } catch (error) {
            throw new Error(`CANNOT_CONNECT_TO_DATABASE: ${error.message}`);
        }
    };

    static disconnect = async (sequelize) => {
        await sequelize.close();
    };

    getBy = async (entity, data) => {
        return await this._models[entity].findOne({ where: data });
    };

    getAll = async (entity, search) => {
        return await this._models[entity].findAll(search);
    };

    getById = async (entity, id, options) => {
        return await this._models[entity].findByPk(id, options);
    };

    create = async (entity, data) => {
        return await this._models[entity].create(data);
    };

    update = async (entity, id, data) => {
        return await this._models[entity].update(data, { where: { id } });
    };

    delete = async (entity, id) => {
        return await this._models[entity].destroy({ where: { id } });
    };
}

export const database = new Database();
