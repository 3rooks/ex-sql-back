import { sequelize } from '#config/db.js';
import { DataTypes } from 'sequelize';

export const Coaches = sequelize.define(
    'Coaches',
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
        }
    },
    { timestamps: true }
);
