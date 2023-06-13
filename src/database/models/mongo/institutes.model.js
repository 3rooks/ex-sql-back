import { ENTITIES } from '#constants/entities.js';
import { randomUUID } from 'crypto';
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const instituteSchema = new Schema(
    {
        _id: {
            unique: true,
            type: Schema.Types.UUID,
            default: () => randomUUID()
        },
        name: { type: String, require: true },
        director: { type: String, require: true },
        address: { type: String, require: true },
        locallity: { type: String, require: true },
        province: { type: String, require: true },
        association: { type: String, require: true },
        gps: { type: String, require: true },
        legalStaff: { type: [String] },
        students: { type: [Schema.Types.UUID], ref: ENTITIES.STUDENTS }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const institutesModel = model(ENTITIES.INSTITUTES, instituteSchema);
