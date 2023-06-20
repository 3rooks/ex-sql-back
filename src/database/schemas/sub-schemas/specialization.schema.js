import { Schema } from 'mongoose';

export const SPECIALIZATION_SCHEMA = new Schema({
    isStudent: { type: Boolean, default: true },
    isTeacher: { type: Boolean, default: false },
    isRefeere: { type: Boolean, default: false },
    isCoach: { type: Boolean, default: false },
    certificates: {
        gal: { type: String, default: null },
        coach: { type: String, default: null },
        referee: { type: String, default: null }
    }
});
