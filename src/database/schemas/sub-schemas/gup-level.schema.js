import { Schema } from 'mongoose';

export const GUP_LVL_SCHEMA = new Schema({
    color: {
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
        default: ''
    }
});
