import { CoachesController } from './lib/coaches.controller.js';
import { InstitutesController } from './lib/institutes.controller.js';
import { StudentsController } from './lib/students.controller.js';

export const coachCtrl = new CoachesController();
export const studentCtrl = new StudentsController();
export const instituteCtrl = new InstitutesController();
