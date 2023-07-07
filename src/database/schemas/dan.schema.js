import { Schema } from 'mongoose';
import uuid from 'uuid-random';
import { DAN_LVL_SCHEMA } from './sub-schemas/dan-level.schema.js';

export const DAN_SCHEMA = new Schema(
    {
        _id: {
            type: Schema.Types.UUID,
            default: () => uuid(),
            unique: true
        },
        first: DAN_LVL_SCHEMA,
        second: DAN_LVL_SCHEMA,
        third: DAN_LVL_SCHEMA,
        fourth: DAN_LVL_SCHEMA,
        fifth: DAN_LVL_SCHEMA,
        sixth: DAN_LVL_SCHEMA,
        seventh: DAN_LVL_SCHEMA,
        eighth: DAN_LVL_SCHEMA,
        ninth: DAN_LVL_SCHEMA,
        tenth: DAN_LVL_SCHEMA
    },
    {
        timestamps: true,
        versionKey: false
    }
);
