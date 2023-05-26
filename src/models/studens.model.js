import { sequelize } from '#config/db.js';
import { DataTypes } from 'sequelize';
import { Institutes } from './institutes.model.js';

export const Students = sequelize.define(
    'Students',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        belt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        institute: {
            type: DataTypes.INTEGER
        }
    },
    { timestamps: true }
);

Students.belongsTo(Institutes, { foreignKey: 'institute', targetKey: 'id' });
