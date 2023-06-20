import { ENTITIES } from '#constants/entities.js';
import { DAN_SCHEMA } from '#database/schemas/dan.schema.js';
import { model } from 'mongoose';

export class DANRepository {
    constructor() {
        this.model = model(ENTITIES.DAN, DAN_SCHEMA);
    }
}
