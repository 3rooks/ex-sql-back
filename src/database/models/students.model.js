import { ENTITIES } from '#constants/entities.js';
import { sequelize } from '#lib/sequelize.js';
import { DataTypes, Model } from 'sequelize';
import uuidV4 from 'uuid-random';
import { InstitutesModel } from './institutes.model.js';

export class StudentsModel extends Model {}

StudentsModel.init(
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
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        instituteId: {
            type: DataTypes.UUID,
            allowNull: false
        }
    },
    { modelName: ENTITIES.STUDENTS, timestamps: true, sequelize }
);

StudentsModel.belongsTo(InstitutesModel, {
    foreignKey: 'instituteId',
    as: 'instituteData'
});

// const students = await StudentsModel.findAll({
//     include: 'instituteData' // Incluir datos del instituto asociado
// });
