import { sequelize } from '#config/db.js';
import { ENTITIES } from '#constants/entities.js';
import { DataTypes, Model } from 'sequelize';
import uuidV4 from 'uuid-random';

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
        institute: {
            type: DataTypes.INTEGER
        }
    },
    { modelName: ENTITIES.STUDENTS, timestamps: true, sequelize }
);
