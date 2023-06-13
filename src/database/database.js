import { ENTITIES } from '#constants/entities.js';
import { FactoryDAO } from './dao/factory.dao.js';
import { CoachesModel } from './models/postgres/coaches.model.js';
import { InstitutesModel } from './models/postgres/institutes.model.js';
import { ModeratorsModel } from './models/postgres/moderators.model.js';
import { StudentsModel } from './models/postgres/students.model.js';

export class Database {
    constructor() {
        this._models = {
            [ENTITIES.COACHES]: CoachesModel,
            [ENTITIES.STUDENTS]: StudentsModel,
            [ENTITIES.INSTITUTES]: InstitutesModel,
            [ENTITIES.MODERATORS]: ModeratorsModel
        };
    }

    static con = async() => {
        const idk = await FactoryDAO.setPersistence('mongo')
    
        return idk
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
