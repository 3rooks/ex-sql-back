import { ENTITIES } from '#constants/entities.js';
import { sequelize } from '#database/dao/sequelize.js';
import { DataTypes, Model } from 'sequelize';
import uuidV4 from 'uuid-random';

export class ModeratorsModel extends Model {}

ModeratorsModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: () => uuidV4(),
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
        }
    },
    {
        modelName: ENTITIES.MODERATORS,
        timestamps: true,
        sequelize: sequelize.instance
    }
);
