import { ENTITIES } from '#constants/entities.js';
import { randomUUID } from 'crypto';
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const studentSchema = new Schema(
    {
        _id: {
            unique: true,
            type: Schema.Types.UUID,
            default: () => randomUUID()
        },
        info: { type: Schema.Types.UUID, ref: ENTITIES.PERSONS },
        enabledProfessor: { type: Schema.Types.UUID, require: true },
        association: { type: String, require: true },
        legalStaffAssociation: { type: String },
        currentLevel: { type: String, require: true },
        lastTest: { type: Date }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const studentsModel = model(ENTITIES.STUDENTS, studentSchema);
