import { Router } from 'express';
import { instituteCtrl } from '../controllers/controllers.js';

const instituteRoutes = Router();

instituteRoutes.get('/institutes', instituteCtrl.getAllInstitutes);

instituteRoutes.get('/institutes/:id', instituteCtrl.getInstituteById);

instituteRoutes.post('/institutes', instituteCtrl.createInstitute);

instituteRoutes.patch('/institutes/:id', instituteCtrl.updateInstitute);

instituteRoutes.delete('/institutes/:id', instituteCtrl.deleteInstitute);

export default instituteRoutes;
