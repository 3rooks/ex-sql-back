import { Schema } from 'mongoose';

export const DAN_LVL_SCHEMA = new Schema({
    level: {
        type: String,
        unique: true
    },
    teacher: String,
    school: String,
    approvedDate: Date,
    isAproved: {
        type: Boolean,
        default: false
    },
    remark: {
        type: String,
        default: null
    }
});
