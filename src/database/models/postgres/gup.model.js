import { ENTITIES } from '#constants/entities.js';
import { sequelize } from '#database/dao/sequelize.js';
import { DataTypes, Model } from 'sequelize';
import uuidV4 from 'uuid-random';

export class HistoryGUPModel extends Model {}

HistoryGUPModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: () => uuidV4(),
            primaryKey: true
        },
        first: {
            type: DataTypes.JSON,
            defaultValue: {
                color: 'red/black',
                testDate: null,
                institute: null,
                professor: null,
                levelObtained: null,
                isApprove: false
            }
        },
        second: {
            color: 'red',
            defaultValue: {
                color: 'red/black',
                testDate: null,
                institute: null,
                professor: null,
                levelObtained: null,
                isApprove: false
            }
        }
    },
    {
        sequelize: sequelize.instance,
        modelName: ENTITIES.STUDENTS,
        timestamps: true
    }
);
