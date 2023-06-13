import { ENTITIES } from '#constants/entities.js';
import { randomUUID } from 'crypto';
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const studies = new Schema(
    {
        gup: {
            type: Schema.Types.UUID,
            ref: ENTITIES.GUP,
            require: true
        },
        dan: {
            type: Schema.Types.UUID,
            ref: ENTITIES.DAN,
            require: true
        }
    },
    {
        _id: false
    }
);

const personSchema = new Schema(
    {
        _id: {
            unique: true,
            type: Schema.Types.UUID,
            default: () => randomUUID()
        },
        name: { type: String, require: true },
        surname: { type: String, require: true },
        born: { type: Date, require: true },
        dni: { type: Number, require: true, unique: true },
        studies
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const personsModel = model(ENTITIES.PERSONS, personSchema);
