import { ENTITIES } from '#constants/entities.js';
import mongoose from 'mongoose';
import { DANRepository } from './repositories/dan.repository.js';
import { GUPRepository } from './repositories/gup.repository.js';
import { ModeratorRepository } from './repositories/moderator.repository.js';
import { PersonRepository } from './repositories/person.repository.js';
import { SchoolRepository } from './repositories/school.repository.js';

export class Database {
    constructor() {
        this.repositories = {
            [ENTITIES.GUP]: new GUPRepository(),
            [ENTITIES.DAN]: new DANRepository(),
            [ENTITIES.PERSONS]: new PersonRepository(),
            [ENTITIES.SCHOOLS]: new SchoolRepository(),
            [ENTITIES.MODERATORS]: new ModeratorRepository()
        };
    }

    static connect = async (uri) => {
        try {
            const db = await mongoose.connect(uri);
            console.log(`Connected successfully [db:${db.connection.name}]`);
        } catch (error) {
            throw new Error(`Cannot connect: ${error.message}`);
        }
    };

    static disconnect = async () => {
        await mongoose.disconnect();
        console.log('Database disconnected.');
    };
}

export const db = new Database();
