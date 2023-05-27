import { sequelize } from '#config/db.js';
import { ENTITIES } from '#constants/entities.js';
import { DataTypes, Model } from 'sequelize';
import uuidV4 from 'uuid-random';

export class InstitutesModel extends Model {}

InstitutesModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: () => uuidV4(),
            primaryKey: true
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
    {
        modelName: ENTITIES.INSTITUTES,
        timestamps: true,
        sequelize
    }
);
