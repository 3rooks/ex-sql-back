import { DB_ENVIROMENT } from '#src/config/env.js';
import { Sequelize } from 'sequelize';

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
