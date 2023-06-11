import { ENTITIES } from '#constants/entities.js';
import { sequelize } from '#database/dao/sequelize.js';
import { DataTypes, Model } from 'sequelize';
import uuidV4 from 'uuid-random';

export class CoachesModel extends Model {}

CoachesModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: () => uuidV4(),
            primaryKey: true
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
    {
        modelName: ENTITIES.COACHES,
        timestamps: true,
        sequelize: sequelize.instance
    }
);
