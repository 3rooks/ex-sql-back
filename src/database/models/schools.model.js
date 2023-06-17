import { ENTITIES } from '#constants/entities.js';
import { sequelize } from '#database/dao/sequelize.js';
import { DataTypes, Model } from 'sequelize';

export class SchoolsModel extends Model {}

SchoolsModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        director: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        locality: {
            type: DataTypes.STRING,
            allowNull: false
        },
        province: {
            type: DataTypes.STRING,
            allowNull: false
        },
        legalEntity: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize: sequelize.instance,
        modelName: ENTITIES.SCHOOLS
    }
);
