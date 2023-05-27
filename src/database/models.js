import { ENTITIES } from '#constants/entities.js';
import { CoachesModel } from './models/coaches.model.js';
import { InstitutesModel } from './models/institutes.model.js';
import { StudentsModel } from './models/students.model.js';

export const MODELS = {
    [ENTITIES.COACHES]: CoachesModel,
    [ENTITIES.STUDENTS]: StudentsModel,
    [ENTITIES.INSTITUTES]: InstitutesModel
};
