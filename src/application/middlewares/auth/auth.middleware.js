import { verifyAsync } from '#lib/jwt.js';

export const authToken = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization)
            return res.status(401).json({ error: 'unauthorized' });

        const jwt = authorization.split(' ')[1];
        if (!jwt) return res.status(401).json({ error: 'unauthorized' });

        const payload = await verifyAsync(jwt);
        req.id = payload.id;

        next();
    } catch (error) {
        return res.status(401).json({ error: 'unauthorized' });
    }
};
