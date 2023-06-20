import { ENTITIES } from '#constants/entities.js';
import { PERSON_SCHEMA } from '#database/schemas/person.schema.js';
import { model } from 'mongoose';

export class PersonRepository {
    constructor() {
        this.model = model(ENTITIES.PERSONS, PERSON_SCHEMA);
    }
}
