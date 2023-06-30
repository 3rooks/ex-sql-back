import { ENTITIES } from '#constants/entities.js';
import { GUP_SCHEMA } from '#database/schemas/gup.schema.js';
import { model } from 'mongoose';

export class GUPRepository {
    constructor() {
        this.model = model(ENTITIES.GUP, GUP_SCHEMA);
    }

    gup = async () => {};

    gupp = async () => {};
}
