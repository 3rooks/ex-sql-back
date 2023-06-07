export class PostgresDAO {
    constructor() {
        this.models = {
            // [ENTITIES.COACHES]: CoachesModel,
            // [ENTITIES.STUDENTS]: StudentsModel,
            // [ENTITIES.INSTITUTES]: InstitutesModel
        };
    }

    async connect(sequelize) {
        try {
            // await sequelize.authenticate();
            // console.log('Connection to the DB successfully.');

            // Sincronizar los modelos con la base de datos
            await sequelize.sync({ force: false });
            console.log('Models synchronized with the database.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

    async disconnect() {}

    async getBy(entity, data) {
        return await this.models[entity].findOne({ where: data });
    }

    async getAll(entity, search) {
        return await this.models[entity].findAll(search);
    }

    async getById(entity, id, options) {
        return await this.models[entity].findByPk(id, options);
    }

    async create(entity, data) {
        return await this.models[entity].create(data);
    }

    async update(entity, id, data) {
        return await this.models[entity].update(data, { where: { id } });
    }

    async delete(entity, id) {
        return await this.models[entity].destroy({ where: { id } });
    }
}

export const POSTGRES_FILE_DAO = import.meta.url;
