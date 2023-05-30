import { Router } from 'express';
import {
    createStudent,
    deleteStudent,
    getAllStudents,
    getStudentById,
    updateStudent
} from '../controllers/students.controller.js';

const studentRoutes = Router();

studentRoutes.get('/students', getAllStudents);

studentRoutes.get('/students/:id', getStudentById);

studentRoutes.post('/students', createStudent);

studentRoutes.patch('/students/:id', updateStudent);

studentRoutes.delete('/students/:id', deleteStudent);

export default studentRoutes;
