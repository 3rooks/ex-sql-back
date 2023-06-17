import { ENTITIES } from '#constants/entities.js';
import { sequelize } from '#database/dao/sequelize.js';
import { DataTypes, Model } from 'sequelize';

export class GUPHistoryModel extends Model {}

GUPHistoryModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        teacher: {
            type: DataTypes.STRING,
            allowNull: false
        },
        school: {
            type: DataTypes.STRING,
            allowNull: false
        },
        note: {
            type: DataTypes.STRING,
            allowNull: true
        },
        approvedDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        isAproved: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    },
    {
        sequelize: sequelize.instance,
        modelName: ENTITIES.STUDENTS
    }
);
