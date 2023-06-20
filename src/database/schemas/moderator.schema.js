import { randomUUID } from 'crypto';
import { Schema } from 'mongoose';

export const MODERATOR_SCHEMA = new Schema(
    {
        _id: {
            type: Schema.Types.UUID,
            default: () => randomUUID(),
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
            super: {
                type: Boolean,
                default: false
            },
            admin: {
                type: Boolean,
                default: false
            },
            user: {
                type: Boolean,
                default: true
            }
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
