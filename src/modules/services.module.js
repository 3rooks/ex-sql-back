import { db } from '#database/database.js';
import { CoachesRepository } from './repositories/coaches.repository.js';
import { InstitutesRepository } from './repositories/institutes.repository.js';
import { ModeratorsRepository } from './repositories/moderators.repository.js';
import { StudentsRepository } from './repositories/students.repository.js';
import { CoachesService } from './services/coaches.service.js';
import { InstitutesService } from './services/institutes.service.js';
import { ModeratorsService } from './services/moderators.service.js';
import { StudentsService } from './services/students.service.js';

export const coaches = new CoachesService(new CoachesRepository(db));
export const students = new StudentsService(new StudentsRepository(db));
export const institutes = new InstitutesService(new InstitutesRepository(db));
export const moderators = new ModeratorsService(new ModeratorsRepository(db));
