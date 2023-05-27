import { ENTITIES } from '#constants/entities.js';
import { CoachesModel } from './coaches.model.js';
import { InstitutesModel } from './institutes.model.js';
import { StudentsModel } from './students.model.js';

export const MODELS = {
    [ENTITIES.COACHES]: CoachesModel,
    [ENTITIES.STUDENTS]: StudentsModel,
    [ENTITIES.INSTITUTES]: InstitutesModel
};
