import { ENTITIES } from '#src/constants/entities.js';
import { Database } from '#src/database/database.js';
import { CoachesRepository } from './lib/coaches.repository.js';
import { InstitutesRepository } from './lib/institutes.repository.js';
import { StudentsRepository } from './lib/students.repository.js';

const db = new Database();

const coachesRepository = new CoachesRepository(db, ENTITIES.COACHES);
const studentsRepository = new StudentsRepository(db, ENTITIES.STUDENTS);
const institutesRepository = new InstitutesRepository(db, ENTITIES.INSTITUTES);

export const REPOSITORIES = {
    coachesRepository,
    institutesRepository,
    studentsRepository
};
