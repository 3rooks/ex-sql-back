import { Sequelize } from 'sequelize';
import { DB_ENVIROMENT } from './env.js';

// 'postgres://user:pass@localhost:5432/dbname'

export const sequelize = new Sequelize(
    DB_ENVIROMENT.database,
    DB_ENVIROMENT.username,
    DB_ENVIROMENT.password,
    {
        host: DB_ENVIROMENT.host,
        dialect: DB_ENVIROMENT.dialect
    }
);

export class Database {
    static async connect(sequelize) {
        try {
            await sequelize.authenticate();
            console.log('Connection to the DB successfully.');

            // Sincronizar los modelos con la base de datos
            await sequelize.sync({ force: true });
            console.log('Models synchronized with the database.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}
