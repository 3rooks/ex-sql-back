import { ROLES } from '#constants/roles.js';
import { Schema } from 'mongoose';
import uuid from 'uuid-random';

export const MODERATOR_SCHEMA = new Schema(
    {
        _id: {
            type: String,
            default: () => uuid(),
            unique: true
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        role: {
            type: String,
            enum: ROLES,
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
