import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
    'postgres://root:admin@localhost:5432/mydbsql'
);

export const dbConnection = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
