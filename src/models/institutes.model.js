import { sequelize } from '#config/db.js';
import { DataTypes } from 'sequelize';

export const Institutes = sequelize.define(
    'Instututes',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    { timestamps: true }
);
