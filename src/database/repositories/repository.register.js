import { ENTITIES } from '#constants/entities.js';
import { DANRepository } from './lib/dan.repository.js';
import { GUPRepository } from './lib/gup.repository.js';
import { ModeratorRepository } from './lib/moderator.repository.js';
import { PersonRepository } from './lib/person.repository.js';
import { SchoolRepository } from './lib/school.repository.js';

export class RepositoryRegister {
    static repositories = {
        [ENTITIES.DAN]: new DANRepository(),
        [ENTITIES.GUP]: new GUPRepository(),
        [ENTITIES.PERSONS]: new PersonRepository(),
        [ENTITIES.SCHOOLS]: new SchoolRepository(),
        [ENTITIES.MODERATORS]: new ModeratorRepository()
    };
}
