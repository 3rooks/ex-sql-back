import { Schema } from 'mongoose';

export const SCHOOL_HISTORY_SCHEMA = new Schema(
    {
        name: { type: String, required: true },
        started: { type: Date, require: true },
        hasDebt: { type: Boolean, default: false },
        transfer: {
            date: { type: Date, default: null },
            form: { type: String, default: null }
        }
    },
    {
        _id: false
    }
);
