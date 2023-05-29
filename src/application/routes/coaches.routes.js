import { Router } from 'express';

const coachRoutes = Router();

coachRoutes.get('/coaches', () => {});

coachRoutes.get('/coaches/:id', () => {});

coachRoutes.post('/coaches', () => {});

coachRoutes.patch('/coaches/:id', () => {});

coachRoutes.delete('/coaches/:id', () => {});

export default coachRoutes;
