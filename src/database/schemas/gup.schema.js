import { randomUUID } from 'crypto';
import { Schema } from 'mongoose';
import { GUP_LVL_SCHEMA } from './sub-schemas/gup-level.schema.js';

export const GUP_SCHEMA = new Schema(
    {
        _id: {
            type: Schema.Types.UUID,
            default: () => randomUUID(),
            unique: true
        },
        first: GUP_LVL_SCHEMA,
        second: GUP_LVL_SCHEMA,
        third: GUP_LVL_SCHEMA,
        fourth: GUP_LVL_SCHEMA,
        fifth: GUP_LVL_SCHEMA,
        sixth: GUP_LVL_SCHEMA,
        seventh: GUP_LVL_SCHEMA,
        eighth: GUP_LVL_SCHEMA,
        ninth: GUP_LVL_SCHEMA,
        tenth: GUP_LVL_SCHEMA
    },
    {
        timestamps: true,
        versionKey: false
    }
);
