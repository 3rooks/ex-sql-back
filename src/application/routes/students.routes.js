import { Router } from 'express';

const studentRoutes = Router();

studentRoutes.get('/carts/:cartId', () => {
    return 'asd';
});

studentRoutes.post('/carts/:cartId/:productId', () => {
    return 'asd';
});

studentRoutes.delete('/carts/:cartId/:productId', () => {
    return 'asd';
});

studentRoutes.post('/carts/payments-products', () => {
    return 'asd';
});

export default studentRoutes;
