import { Router } from 'express';

const coachRoutes = Router();

coachRoutes.get('/carts/:cartId', () => {
    return 'asd';
});

coachRoutes.post('/carts/:cartId/:productId', () => {
    return 'asd';
});

coachRoutes.delete('/carts/:cartId/:productId', () => {
    return 'asd';
});

coachRoutes.post('/carts/payments-products', () => {
    return 'asd';
});

export default coachRoutes;
