import { Sequelize } from 'sequelize';

export class SequelizeFactory {
    constructor(uri) {
        this.instance = new Sequelize(String(uri));
    }

    auth = async () => {
        await this.instance.authenticate();
        console.log('Connection to the database successfully.');
    };

    sync = async () => {
        await this.instance.sync({ force: false });
        console.log('Models synchronized with the database.');
    };

    close = async () => {
        await this.instance.close();
        console.log('Database Disconnected.');
    };
}

export const sequelize = new SequelizeFactory(process.env.POSTGRES_URI);

// 'postgres://user:pass@localhost:5432/dbname'
