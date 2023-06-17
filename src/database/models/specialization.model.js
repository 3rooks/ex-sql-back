import { ENTITIES } from '#constants/entities.js';
import { sequelize } from '#database/dao/sequelize.js';
import { DataTypes, Model } from 'sequelize';

export class SpecializationsModel extends Model {}

SpecializationsModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        isStudent: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        isTeacher: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isRefeere: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        certRefeere: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        isCoach: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        certCoach: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        hasGal: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        certGal: {
            type: DataTypes.STRING,
            defaultValue: null
        }
    },
    {
        sequelize: sequelize.instance,
        modelName: ENTITIES.SPECILIZATIONS
    }
);
