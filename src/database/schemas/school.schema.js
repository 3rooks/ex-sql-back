import { randomUUID } from 'crypto';
import { Schema } from 'mongoose';

export const SCHOOL_SCHEMA = new Schema(
    {
        _id: {
            type: Schema.Types.UUID,
            default: () => randomUUID(),
            unique: true
        },
        name: {
            type: String,
            require: true
        },
        director: {
            type: String,
            require: true
        },
        locality: {
            type: String,
            require: true
        },
        province: {
            type: String,
            require: true
        },
        juridicalPerson: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
