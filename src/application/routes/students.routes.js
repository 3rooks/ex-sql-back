import { Router } from 'express';
import { studentCtrl } from '../controllers/controllers.js';

const studentRoutes = Router();

studentRoutes.get('/students', studentCtrl.getAllStudents);

studentRoutes.get('/students/:id', studentCtrl.getStudentById);

studentRoutes.post('/students', studentCtrl.createStudent);

studentRoutes.patch('/students/:id', studentCtrl.updateStudent);

studentRoutes.delete('/students/:id', studentCtrl.deleteStudent);

export default studentRoutes;
