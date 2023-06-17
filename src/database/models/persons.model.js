import { ENTITIES } from '#constants/entities.js';
import { sequelize } from '#database/dao/sequelize.js';
import { DataTypes, Model } from 'sequelize';
import { DANHistoryModel } from './dan-history.model.js';
import { GUPHistoryModel } from './gup-history.model.js';
import { SchoolHistoryModel } from './school-history.js';
import { SpecializationsModel } from './specialization.model.js';

export class PersonsModel extends Model {}

PersonsModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dni: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        born: {
            type: DataTypes.DATE,
            allowNull: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    },
    {
        sequelize: sequelize.instance,
        modelName: ENTITIES.PERSONS
    }
);

PersonsModel.hasMany(GUPHistoryModel, {
    foreignKey: 'personId',
    as: 'gup'
});

PersonsModel.hasMany(DANHistoryModel, {
    foreignKey: 'personId',
    as: 'dan'
});

PersonsModel.hasOne(SpecializationsModel, {
    foreignKey: 'personId',
    as: 'specialization'
});

PersonsModel.hasMany(SchoolHistoryModel, {
    foreignKey: 'personId',
    as: 'schoolHistories'
});

GUPHistoryModel.belongsTo(PersonsModel, {
    foreignKey: 'personId'
});

DANHistoryModel.belongsTo(PersonsModel, {
    foreignKey: 'personId'
});

SchoolHistoryModel.belongsTo(PersonsModel, {
    foreignKey: 'personId'
});

SpecializationsModel.belongsTo(PersonsModel, {
    foreignKey: 'personId'
});
