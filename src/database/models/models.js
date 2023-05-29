import { ENTITIES } from '#constants/entities.js';
import { CoachesModel } from './lib/coaches.model.js';
import { InstitutesModel } from './lib/institutes.model.js';
import { StudentsModel } from './lib/students.model.js';

export const MODELS = {
    [ENTITIES.COACHES]: CoachesModel,
    [ENTITIES.STUDENTS]: StudentsModel,
    [ENTITIES.INSTITUTES]: InstitutesModel
};
