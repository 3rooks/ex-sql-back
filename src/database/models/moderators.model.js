import { ENTITIES } from '#constants/entities.js';
import { sequelize } from '#database/dao/sequelize.js';
import { DataTypes, Model } from 'sequelize';
import uuid from 'uuid-random';

export class ModeratorsModel extends Model {}

ModeratorsModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: () => uuid(),
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        permissions: {
            type: DataTypes.BOOLEAN
        }
    },
    {
        sequelize: sequelize.instance,
        modelName: ENTITIES.MODERATORS
    }
);
