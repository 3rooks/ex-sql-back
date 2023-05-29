import { REPOSITORIES } from '#src/repositories/repositories.js';
import { CoachesService } from './lib/coaches.service.js';
import { InstitutesService } from './lib/institutes.service.js';
import { StudentsService } from './lib/students.service.js';

const { coachesRepository, studentsRepository, institutesRepository } =
    REPOSITORIES;

const coachesService = new CoachesService(coachesRepository);
const studentsService = new StudentsService(studentsRepository);
const institutesService = new InstitutesService(institutesRepository);

export const SERVICES = {
    coachesService,
    studentsService,
    institutesService
};
