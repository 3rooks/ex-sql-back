import { Router } from 'express';

const instituteRoutes = Router();

instituteRoutes.get('/carts/:cartId', () => {
    return 'asd';
});

instituteRoutes.post('/carts/:cartId/:productId', () => {
    return 'asd';
});

instituteRoutes.delete('/carts/:cartId/:productId', () => {
    return 'asd';
});

instituteRoutes.post('/carts/payments-products', () => {
    return 'asd';
});

export default instituteRoutes;
