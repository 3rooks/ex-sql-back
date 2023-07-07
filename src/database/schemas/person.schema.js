import { Schema } from 'mongoose';
import uuid from 'uuid-random';
import { SCHOOL_HISTORY_SCHEMA } from './sub-schemas/school-history.schema.js';
import { SPECIALIZATION_SCHEMA } from './sub-schemas/specialization.schema.js';

export const PERSON_SCHEMA = new Schema(
    {
        _id: {
            type: Schema.Types.UUID,
            default: () => uuid(),
            unique: true
        },
        fullname: {
            type: String,
            require: true
        },
        dni: {
            type: Number,
            require: true
        },
        birth: {
            type: Date,
            require: true
        },
        studies: {
            gup: Schema.Types.UUID,
            dan: Schema.Types.UUID
        },
        specialization: SPECIALIZATION_SCHEMA,
        institutes: [SCHOOL_HISTORY_SCHEMA]
    },
    {
        timestamps: true,
        versionKey: false
    }
);
