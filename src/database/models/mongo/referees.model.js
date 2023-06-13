import { ENTITIES } from '#constants/entities.js';
import { randomUUID } from 'crypto';
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const refereeSchema = new Schema(
    {
        _id: {
            unique: true,
            type: Schema.Types.UUID,
            default: () => randomUUID()
        },
        info: { type: Schema.Types.UUID, ref: ENTITIES.PERSONS },
        national: { type: Boolean },
        province: { type: Boolean },
        isCoach: { type: Boolean },
        nationalValidanceGal: { to: Date, from: Date },
        internationalValidanceGal: { to: Date, from: Date }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const refereesModel = model(ENTITIES.REFEREES, refereeSchema);
