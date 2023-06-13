import { ENTITIES } from '#constants/entities.js';
import { sequelize } from '#database/dao/sequelize.js';
import { DataTypes, Model } from 'sequelize';
import uuidV4 from 'uuid-random';
import { HistoryGUPModel } from './gup.model.js';

export class PersonsModel extends Model {}

PersonsModel.init(
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
        born: {
            type: DataTypes.DATE,
            allowNull: false
        },
        dni: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        studies: {
            type: DataTypes.UUID,
            allowNull: false
        }
    },
    {
        sequelize: sequelize.instance,
        modelName: ENTITIES.STUDENTS,
        timestamps: true
    }
);

PersonsModel.hasMany(HistoryGUPModel);
HistoryGUPModel.belongsTo(PersonsModel);
