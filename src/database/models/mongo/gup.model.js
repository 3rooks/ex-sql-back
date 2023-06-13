import { ENTITIES } from '#constants/entities.js';
import { randomUUID } from 'crypto';
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const level = new Schema(
    {
        color: {
            type: String,
            unique: true
        },
        testDate: Date,
        professor: String,
        institute: {
            type: Schema.Types.UUID,
            ref: ENTITIES.INSTITUTES
        },
        isApproved: {
            type: Boolean,
            default: false
        }
    },
    {
        _id: false,
        versionKey: false
    }
);

const gupSchema = new Schema(
    {
        _id: {
            unique: true,
            type: Schema.Types.UUID,
            default: () => randomUUID()
        },
        first: level,
        second: level,
        third: level,
        fourth: level,
        fifth: level,
        sixth: level,
        seventh: level,
        eighth: level,
        ninth: level,
        tenth: level
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const gupModel = model(ENTITIES.GUP, gupSchema);
