import { Schema } from 'mongoose';
import uuid from 'uuid-random';

export const SCHOOL_SCHEMA = new Schema(
    {
        _id: {
            type: String,
            default: () => uuid(),
            unique: true
        },
        name: {
            type: String,
            require: true,
            unique: true
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
        legalEntity: {
            type: String,
            require: true
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
