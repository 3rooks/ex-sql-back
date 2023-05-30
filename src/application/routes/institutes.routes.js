import {
    createInstitute,
    deleteInstitute,
    getAllInstitutes,
    getInstituteById,
    updateInstitute
} from '#application/controllers/institutes.controller.js';
import { Router } from 'express';

const instituteRoutes = Router();

instituteRoutes.get('/institutes', getAllInstitutes);

instituteRoutes.get('/institutes/:id', getInstituteById);

instituteRoutes.post('/institutes', createInstitute);

instituteRoutes.patch('/institutes/:id', updateInstitute);

instituteRoutes.delete('/institutes/:id', deleteInstitute);

export default instituteRoutes;
