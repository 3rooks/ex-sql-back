import { Router } from 'express';

const instituteRoutes = Router();

instituteRoutes.get('/institutes');

instituteRoutes.get('/institutes/:id');

instituteRoutes.post('/institutes');

instituteRoutes.patch('/institutes/:id');

instituteRoutes.delete('/institutes/:id');

export default instituteRoutes;
