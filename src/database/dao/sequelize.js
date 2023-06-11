import { Sequelize } from 'sequelize';

class SequelizeInstance {
    constructor(uri) {
        this._instance = null;
        this._createInstance(uri);
    }

    _createInstance(uri) {
        this._instance = new Sequelize(String(uri));
    }

    async connection() {
        try {
            // await sequelize.authenticate();
            // console.log('Connection to the DB successfully.');

            // Sincronizar los modelos con la base de datos

            if (!this._instance) throw new Error('NO_INSTANCE');

            await this._instance.sync({ force: false });
            console.log('Models synchronized with the database.');
        } catch (error) {
            throw new Error(`CAN_NOT_CONNECT_TO_DATABASE: ${error.message}`);
        }
    }

    async disconnect() {
        await this._instance.close();
    }

    getInstance() {
        if (!this._instance) throw new Error('NO_INSTANCE');
        return this._instance;
    }
}

// 'postgres://user:pass@localhost:5432/dbname'

export const sequelize = new SequelizeInstance(process.env.POSTGRES_URI);
