import { ENTITIES } from '#src/constants/entities.js';
import { Database } from '#src/database/database.js';
import { MODELS } from '#src/database/models.js';
import { CoachRepository } from './coaches.repository.js';
import { InstitutesRepository } from './institutes.repository.js';
import { StudentsRepository } from './students.repository.js';

const db = new Database(MODELS);

export const CoachesRepo = new CoachRepository(db, ENTITIES.COACHES);
export const InstitutesRepo = new InstitutesRepository(db);
export const StudentsRepo = new StudentsRepository(db);
