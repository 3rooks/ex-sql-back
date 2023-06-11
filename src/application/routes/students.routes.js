import { Router } from 'express';

const studentRoutes = Router();

studentRoutes.get('/students');

studentRoutes.get('/students/:id');

studentRoutes.post('/students');

studentRoutes.patch('/students/:id');

studentRoutes.delete('/students/:id');

export default studentRoutes;
